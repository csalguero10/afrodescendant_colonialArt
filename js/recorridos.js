/**
 * PRESENCIAS — Exposición Virtual de Arte Colonial
 * recorridos.js — JavaScript compartido para los recorridos narrativos
 *
 * Usado por:  pages/publico-general.html
 *             pages/especialistas.html
 *
 * Requiere: que cada página defina window.SALA_IDS como array de IDs de sala
 *           Ejemplo: window.SALA_IDS = ['sala-1','sala-2','sala-3','sala-4'];
 *
 * Depende de: js/main.js (navbar, scroll reveal genérico)
 */

(function () {

  /* ────────────────────────────────────────────────────────────
     1. HERO — animación de entrada de la imagen de fondo
  ──────────────────────────────────────────────────────────── */
  var heroBg = document.getElementById('hero-bg');
  if (heroBg) {
    /* Extrae la URL del background-image inline y dispara onload */
    var bgUrl = heroBg.style.backgroundImage.replace(/url\(['"]?|['"]?\)/g, '');
    if (bgUrl) {
      var tempImg = new Image();
      tempImg.onload = function () { heroBg.classList.add('loaded'); };
      tempImg.src = bgUrl;
    }
  }

  /* ────────────────────────────────────────────────────────────
     2. PROGRESS BAR — avance de lectura de la página
  ──────────────────────────────────────────────────────────── */
  var progressFill = document.getElementById('progress-fill');

  function updateProgress() {
    var scrollTop  = window.scrollY;
    var docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    var pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressFill) progressFill.style.width = pct.toFixed(1) + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress(); /* estado inicial */

  /* ────────────────────────────────────────────────────────────
     3. SCROLLYTELLING — zoom en la pintura sticky + panel activo
     Cada sala tiene:
       - .sala__painting  → imagen con transform escalable
       - .scroll-panel    → paneles con data-zoom y data-origin
  ──────────────────────────────────────────────────────────── */
  var salaIds     = window.SALA_IDS || [];
  var trackerDots = document.querySelectorAll('.tracker-dot');

  salaIds.forEach(function (salaId, salaIdx) {
    var sala = document.getElementById(salaId);
    if (!sala) return;

    var painting = sala.querySelector('.sala__painting');
    var panels   = sala.querySelectorAll('.scroll-panel');

    /* Observer por panel: activa el panel visible y hace zoom */
    var panelObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        /* Activar panel actual, desactivar el resto */
        panels.forEach(function (p) { p.classList.remove('active'); });
        entry.target.classList.add('active');

        /* Zoom + transform-origin desde data-attributes del panel */
        var zoom   = parseFloat(entry.target.dataset.zoom   || '1');
        var origin = entry.target.dataset.origin || '50% 50%';

        if (painting) {
          painting.style.transformOrigin = origin;
          painting.style.transform       = 'scale(' + zoom + ')';
        }
      });
    }, {
      threshold:  0.5,
      rootMargin: '0px'
    });

    panels.forEach(function (p) { panelObserver.observe(p); });

    /* Observer por sala: activa el punto del tracker lateral */
    var salaObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          trackerDots.forEach(function (dot, i) {
            dot.classList.toggle('active', i === salaIdx);
          });
        }
      });
    }, { threshold: 0.25 });

    salaObserver.observe(sala);
  });

  /* ────────────────────────────────────────────────────────────
     4. TRACKER DOTS — click para saltar a la sala correspondiente
  ──────────────────────────────────────────────────────────── */
  trackerDots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      var target = document.getElementById(dot.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ────────────────────────────────────────────────────────────
     5. REVEAL — IntersectionObserver para secciones .reveal-up
        (audio intro, cierre, etc.)
  ──────────────────────────────────────────────────────────── */
  var revealEls = document.querySelectorAll('.reveal-up');

  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target); /* one-shot */
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(function (el) { revealObs.observe(el); });

  /* ────────────────────────────────────────────────────────────
     6. CTA HERO — smooth scroll al primer sala
  ──────────────────────────────────────────────────────────── */
  var heroCta = document.querySelector('.pg-hero__cta');
  if (heroCta) {
    heroCta.addEventListener('click', function (e) {
      var href = heroCta.getAttribute('href');
      /* Solo interceptar si el href es un ancla interna (#sala-1) */
      if (href && href.startsWith('#')) {
        e.preventDefault();
        var target = document.getElementById(href.slice(1));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

})();