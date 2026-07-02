/**
 * PRESENCIAS — Exposición Virtual de Arte Colonial
 * museum-plan.js — Planimetría interactiva del museo
 *
 * Funcionalidad:
 *  - Renderiza botones numerados (hotspots) sobre la imagen del plano
 *  - Al hover: muestra tooltip con preview de la obra (imagen + título + artista)
 *  - Al click: navega a la página de detalle de la obra
 *
 * Depende de: artworks.js (window.ARTWORKS)
 * Se inicializa con: initMuseumPlan(containerId)
 */

/**
 * Coordenadas de los hotspots del plano.
 * x e y son porcentajes relativos al contenedor de la imagen.
 * Ajustar si se cambia la imagen del plano.
 *
 * @type {Array<{id: string, x: number, y: number, number: number}>}
 */
var HOTSPOTS = [
  // Sala izquierda — pared superior
  { id: "1",  x: 10,   y: 72,   number: 1  },
  { id: "6",  x: 11.5, y: 60,   number: 2  },
  { id: "9",  x: 13,   y: 48,   number: 3  },
  { id: "10",  x: 14,   y: 32,   number: 4  },
  { id: "11",  x: 25,   y: 32,   number: 5  },

  // Sala izquierda — pared inferior
  { id: "4",  x: 32.5, y: 55.5, number: 6  },
  { id: "5",  x: 39.5, y: 55.5, number: 7  },
  { id: "8",  x: 46,   y: 55.5, number: 8  },

  // Sala central — cuadros superiores
  { id: "2",  x: 61,   y: 55.5, number: 9  },
  { id: "7", x: 65.5, y: 55.5, number: 10 },
  { id: "12", x: 69.5, y: 55.5, number: 11 },
  { id: "13", x: 73.5, y: 55.5, number: 12 },
  // Sala roja — pared
  { id: "3", x: 85,   y: 55.5, number: 13 },
  { id: "14", x: 90,   y: 66.5, number: 14 },
  { id: "15", x: 85,   y: 75.5, number: 15 }
];

/**
 * Inicializar la planimetría interactiva.
 * @param {string} containerId - ID del elemento contenedor
 */
function initMuseumPlan(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  /* ── Crear wrapper relativo para posicionar los hotspots ── */
  var wrapper = container.querySelector('.plan-wrapper');
  if (!wrapper) {
    console.warn('museum-plan.js: no se encontró .plan-wrapper dentro de #' + containerId);
    return;
  }

  /* ── Crear tooltip (único, se reutiliza para todos los hotspots) ── */
  var tooltip = document.createElement('div');
  tooltip.id = 'plan-tooltip';
  tooltip.style.cssText = [
    'position: fixed',
    'z-index: 200',
    'pointer-events: none',
    'display: none',
    'width: 220px',
    'background: #191613',
    'border: 2px solid #B8924A',
    'border-radius: 8px',
    'overflow: hidden',
    'box-shadow: 0 20px 40px rgba(0,0,0,0.5)'
  ].join(';');

  tooltip.innerHTML = [
    '<div id="plan-tooltip-img" style="aspect-ratio:3/4;background:#2A2620;overflow:hidden;">',
    '  <img id="plan-tooltip-imgEl" style="width:100%;height:100%;object-fit:cover;" src="" alt="" />',
    '</div>',
    '<div style="padding:0.75rem;background:#191613;">',
    '  <p id="plan-tooltip-artist" style="font-family:Oswald,sans-serif;font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:#6A6460;margin-bottom:4px;"></p>',
    '  <p id="plan-tooltip-title"  style="font-family:Raleway,sans-serif;font-size:13px;font-weight:600;color:#D9CEC5;margin-bottom:4px;line-height:1.4;"></p>',
    '  <p id="plan-tooltip-year"   style="font-family:Raleway,sans-serif;font-size:11px;color:#A68F7B;"></p>',
    '</div>'
  ].join('');

  document.body.appendChild(tooltip);

  /* Alias de elementos internos del tooltip */
  var tooltipImg    = document.getElementById('plan-tooltip-imgEl');
  var tooltipArtist = document.getElementById('plan-tooltip-artist');
  var tooltipTitle  = document.getElementById('plan-tooltip-title');
  var tooltipYear   = document.getElementById('plan-tooltip-year');

  /* ── Renderizar hotspots ── */
  HOTSPOTS.forEach(function (hotspot) {
    /* Buscar la obra correspondiente en el array global */
    var artwork = window.getArtworkById ? window.getArtworkById(hotspot.id) : null;
    if (!artwork) return;

    /* Crear el botón del hotspot */
    var btn = document.createElement('button');
    btn.className = 'plan-hotspot';
    btn.setAttribute('aria-label', 'Ver obra: ' + artwork.title);
    btn.setAttribute('data-id', hotspot.id);
    btn.textContent = hotspot.number;

    /* Posicionamiento porcentual */
    btn.style.cssText = [
      'position: absolute',
      'left: ' + hotspot.x + '%',
      'top: '  + hotspot.y + '%',
      'transform: translate(-50%, -50%)',
      'width: 32px',
      'height: 32px',
      'border-radius: 50%',
      'background: #B8924A',
      'color: #fff',
      'font-family: Oswald, sans-serif',
      'font-size: 12px',
      'font-weight: 700',
      'border: 2px solid rgba(255,255,255,0.3)',
      'cursor: pointer',
      'display: flex',
      'align-items: center',
      'justify-content: center',
      'transition: transform 300ms ease-out, background 300ms ease-out, box-shadow 300ms ease-out',
      'box-shadow: 0 4px 12px rgba(0,0,0,0.4)',
      'z-index: 10'
    ].join(';');

    /* ── Hover: mostrar tooltip ── */
    btn.addEventListener('mouseenter', function (e) {
      /* Llenar tooltip con datos de la obra */
      tooltipImg.src       = artwork.imageUrl;
      tooltipImg.alt       = artwork.title;
      tooltipArtist.textContent = artwork.artist;
      tooltipTitle.textContent  = artwork.title;
      tooltipYear.textContent   = artwork.year;

      tooltip.style.display = 'block';
      tooltip.classList.add('animate-fadeIn');

      positionTooltip(e);

      /* Escalar el botón */
      btn.style.transform = 'translate(-50%, -50%) scale(1.3)';
      btn.style.background = '#CCA761';
      btn.style.boxShadow = '0 8px 24px rgba(0,0,0,0.5)';
    });

    btn.addEventListener('mousemove', positionTooltip);

    btn.addEventListener('mouseleave', function () {
      tooltip.style.display = 'none';
      btn.style.transform = 'translate(-50%, -50%) scale(1)';
      btn.style.background = '#B8924A';
      btn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)';
    });

    /* ── Click: navegar a la página de detalle ── */
    btn.addEventListener('click', function () {
      /* Construir la URL relativa a la página de colección */
      window.location.href = 'coleccion.html?obra=' + artwork.id;
    });

    wrapper.appendChild(btn);
  });

  /**
   * Posicionar el tooltip cerca del cursor, evitando que salga del viewport.
   * @param {MouseEvent} e
   */
  function positionTooltip(e) {
    var offset = 16;
    var tw = tooltip.offsetWidth  || 220;
    var th = tooltip.offsetHeight || 280;
    var vw = window.innerWidth;
    var vh = window.innerHeight;

    var left = e.clientX + offset;
    var top  = e.clientY - th - offset;

    /* Ajustar si se sale por la derecha */
    if (left + tw > vw - 10) {
      left = e.clientX - tw - offset;
    }

    /* Ajustar si se sale por arriba */
    if (top < 10) {
      top = e.clientY + offset;
    }

    /* Ajustar si se sale por abajo */
    if (top + th > vh - 10) {
      top = vh - th - 10;
    }

    tooltip.style.left = left + 'px';
    tooltip.style.top  = top  + 'px';
  }
}

/* Auto-inicializar si existe el elemento en el DOM */
document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('museum-plan')) {
    initMuseumPlan('museum-plan');
  }
});
