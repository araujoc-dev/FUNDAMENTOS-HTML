/* =========================================================
   PixelPulse - Interatividade
   1. Menu mobile (hambúrguer)
   2. Filtro de notícias por categoria
   3. Curtir notícias (com localStorage)
   4. Newsletter com validação
   5. Fallback de imagens quebradas
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. MENU MOBILE ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // Fecha o menu ao clicar em um link e marca o link ativo
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      mainNav.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- 2. FILTRO POR CATEGORIA ---------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('#newsGrid .card');
  const emptyMsg = document.getElementById('emptyMsg');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Atualiza o botão ativo
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Mostra/oculta os cards conforme a categoria
      let visibleCount = 0;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hide', !match);
        if (match) visibleCount++;
      });

      emptyMsg.hidden = visibleCount > 0;
    });
  });

  /* ---------- 3. CURTIR NOTÍCIAS ---------- */
  // Cada botão recebe um ID baseado na posição, para salvar no localStorage
  const likeButtons = document.querySelectorAll('[data-like]');
  let savedLikes = [];
  try {
    savedLikes = JSON.parse(localStorage.getItem('pixelpulse-likes')) || [];
  } catch (e) { savedLikes = []; }

  likeButtons.forEach((btn, index) => {
    const countEl = btn.querySelector('.like-count');
    const baseCount = parseInt(countEl.textContent, 10);

    // Restaura estado salvo
    if (savedLikes.includes(index)) {
      btn.classList.add('liked');
      btn.setAttribute('aria-pressed', 'true');
      btn.firstChild.textContent = '♥ ';
      countEl.textContent = baseCount + 1;
    }

    btn.addEventListener('click', () => {
      const liked = btn.classList.toggle('liked');
      btn.setAttribute('aria-pressed', liked);
      btn.firstChild.textContent = liked ? '♥ ' : '♡ ';
      countEl.textContent = liked ? baseCount + 1 : baseCount;

      // Atualiza a lista salva
      savedLikes = liked
        ? [...savedLikes, index]
        : savedLikes.filter(i => i !== index);
      try { localStorage.setItem('pixelpulse-likes', JSON.stringify(savedLikes)); } catch (e) {}
    });
  });

  /* ---------- 4. NEWSLETTER ---------- */
  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('email');
  const formMsg = document.getElementById('formMsg');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!emailRegex.test(email)) {
      formMsg.textContent = 'Digite um e-mail válido.';
      formMsg.className = 'form-msg error';
      return;
    }

    formMsg.textContent = '🎮 Inscrição confirmada! Bem-vindo(a) ao PixelPulse.';
    formMsg.className = 'form-msg success';
    form.reset();
    setTimeout(() => { formMsg.textContent = ''; }, 5000);
  });

  /* ---------- 5. FALLBACK DE IMAGENS ---------- */
  // Se alguma imagem do Unsplash falhar, esconde o <img> e mantém o gradiente de fundo
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => { img.style.visibility = 'hidden'; });
  });

});
