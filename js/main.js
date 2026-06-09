/**
 * PRESENCIAS — Exposición Virtual de Arte Colonial
 * main.js — JavaScript compartido en todas las páginas
 *
 * Contiene:
 *  1. Navbar: efecto scroll + menú móvil
 *  2. Scroll Reveal: IntersectionObserver para animaciones de entrada
 *  3. Acordeón: expandir / colapsar ítems
 *  4. Carrusel horizontal: navegación con botones prev / next
 *  5. Marcado de enlace activo en la navbar
 *  6. Quotes rotativo (sección Narrativas)
 */

/* ─────────────────────────────────────────────────────────────────────────────
   1. NAVBAR — efecto al hacer scroll + menú móvil
   ───────────────────────────────────────────────────────────────────────────── */
(function initNavbar() {
  const navbar  = document.querySelector('.navbar');
  const toggle  = document.querySelector('.navbar__toggle');
  const mobile  = document.querySelector('.navbar__mobile');

  if (!navbar) return;

  /* ── Detectar scroll para aplicar fondo ── */
  function onScroll() {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // ejecutar una vez al cargar

  /* ── Menú hamburguesa (mobile) ── */
  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      const isOpen = mobile.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });

    /* Cerrar el menú al hacer click fuera */
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target)) {
        mobile.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();


/* ─────────────────────────────────────────────────────────────────────────────
   2. SCROLL REVEAL — animación de entrada al hacer scroll
   ───────────────────────────────────────────────────────────────────────────── */
(function initScrollReveal() {
  /* Seleccionar todos los elementos con clase .reveal */
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  /* Usar IntersectionObserver para detectar cuando entran al viewport */
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          /* Dejar de observar una vez que ya es visible (one-shot) */
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,          // viewport del navegador
      threshold: 0.12,     // 12% del elemento visible
      rootMargin: '0px'
    }
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
})();


/* ─────────────────────────────────────────────────────────────────────────────
   3. ACORDEÓN — expandir / colapsar paneles
   ───────────────────────────────────────────────────────────────────────────── */
(function initAccordion() {
  /* Todos los botones que disparan acordeones */
  const triggers = document.querySelectorAll('.accordion__trigger');
  if (!triggers.length) return;

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const body   = trigger.nextElementSibling; // .accordion__body
      const isOpen = trigger.classList.contains('open');

      /* Opción: cerrar todos los otros antes de abrir (comportamiento exclusivo)
         Quitar las dos líneas de abajo si se quieren múltiples abiertos */
      triggers.forEach(function (t) {
        t.classList.remove('open');
        if (t.nextElementSibling) {
          t.nextElementSibling.classList.remove('open');
        }
      });

      /* Si no estaba abierto, abrirlo ahora */
      if (!isOpen) {
        trigger.classList.add('open');
        if (body) body.classList.add('open');
      }
    });
  });
})();


/* ─────────────────────────────────────────────────────────────────────────────
   4. CARRUSEL HORIZONTAL — prev / next
   ───────────────────────────────────────────────────────────────────────────── */
(function initCarousels() {
  /* Buscar todos los conjuntos carrusel en la página */
  const wrappers = document.querySelectorAll('[data-carousel]');
  if (!wrappers.length) return;

  wrappers.forEach(function (wrapper) {
    const track  = wrapper.querySelector('.carousel__track');
    const btnPrev = wrapper.querySelector('[data-carousel-prev]');
    const btnNext = wrapper.querySelector('[data-carousel-next]');
    const scroll  = wrapper.querySelector('.carousel');

    if (!track || !scroll) return;

    /* Ancho de desplazamiento: el ancho de un ítem + su gap */
    function getScrollAmount() {
      const item = track.firstElementChild;
      if (!item) return 300;
      const style = window.getComputedStyle(track);
      const gap   = parseInt(style.gap) || 24;
      return item.offsetWidth + gap;
    }

    if (btnPrev) {
      btnPrev.addEventListener('click', function () {
        scroll.scrollBy({ left: -getScrollAmount() * 3, behavior: 'smooth' });
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', function () {
        scroll.scrollBy({ left: getScrollAmount() * 3, behavior: 'smooth' });
      });
    }
  });
})();


/* ─────────────────────────────────────────────────────────────────────────────
   5. NAV ACTIVO — marcar el enlace de la página actual
   ───────────────────────────────────────────────────────────────────────────── */
(function markActiveNav() {
  /* Obtener el nombre del archivo actual (ej: "about.html") */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  /* Revisar todos los links del navbar (desktop y mobile) */
  const allLinks = document.querySelectorAll('.navbar__links a, .navbar__mobile a');

  allLinks.forEach(function (link) {
    const href = link.getAttribute('href') || '';
    /* Si el href termina con el nombre de la página actual, marcarlo */
    if (href.endsWith(currentPage)) {
      link.classList.add('active');
    }
  });
})();


/* ─────────────────────────────────────────────────────────────────────────────
   6. QUOTES ROTATIVO — para la sección de citas en Narrativas
   ───────────────────────────────────────────────────────────────────────────── */
(function initQuotes() {
  const quoteSection = document.querySelector('[data-quotes]');
  if (!quoteSection) return;

  const quoteText   = quoteSection.querySelector('[data-quote-text]');
  const quoteAuthor = quoteSection.querySelector('[data-quote-author]');
  const quoteRole   = quoteSection.querySelector('[data-quote-role]');
  const dots        = quoteSection.querySelectorAll('.quote-dot');
  const btnPrev     = quoteSection.querySelector('[data-quote-prev]');
  const btnNext     = quoteSection.querySelector('[data-quote-next]');

  if (!quoteText || !dots.length) return;

  let current = 0;

  /* Leer las citas del atributo data o de los dots */
  const quotes = Array.from(dots).map(function (dot) {
    return {
      text:   dot.dataset.text   || '',
      author: dot.dataset.author || '',
      role:   dot.dataset.role   || ''
    };
  });

  function showQuote(index) {
    /* Fade out */
    quoteText.style.opacity = '0';
    setTimeout(function () {
      /* Actualizar contenido */
      quoteText.textContent   = quotes[index].text;
      if (quoteAuthor) quoteAuthor.textContent = quotes[index].author;
      if (quoteRole)   quoteRole.textContent   = quotes[index].role;

      /* Actualizar dots */
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === index);
      });

      /* Fade in */
      quoteText.style.opacity = '1';
    }, 200);

    current = index;
  }

  /* Navegación con dots */
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () { showQuote(i); });
  });

  /* Botones prev / next */
  if (btnPrev) {
    btnPrev.addEventListener('click', function () {
      showQuote((current - 1 + quotes.length) % quotes.length);
    });
  }
  if (btnNext) {
    btnNext.addEventListener('click', function () {
      showQuote((current + 1) % quotes.length);
    });
  }

  /* Transición CSS en quoteText */
  quoteText.style.transition = 'opacity 200ms ease-out';

  /* Auto-rotación cada 6 segundos */
  setInterval(function () {
    showQuote((current + 1) % quotes.length);
  }, 6000);
})();
