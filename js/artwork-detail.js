/**
 * PRESENCIAS — Exposición Virtual de Arte Colonial
 * artwork-detail.js — Viewer de obra completo
 *
 * Funcionalidad:
 *  - Carga la obra desde window.ARTWORKS según ?obra=ID en la URL
 *  - Zoom con rueda del ratón + panning con arrastre
 *  - Panel de Info (descripción + ficha técnica) deslizable
 *  - Panel de Detalles (zooms iconográficos) con thumbnails
 *  - Navegación prev / next entre obras
 *  - Botón de compartir (Web Share API o fallback al portapapeles)
 *  - Carrusel de obras relacionadas al final
 *
 * Depende de: artworks.js (window.ARTWORKS, window.getArtworkById)
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Leer ID de la URL (?obra=13) ── */
  var params    = new URLSearchParams(window.location.search);
  var artworkId = params.get('obra') || '13';

  var artwork      = window.getArtworkById ? window.getArtworkById(artworkId) : null;
  var artworks     = window.ARTWORKS || [];
  var currentIndex = artworks.findIndex(function (a) { return a.id === artworkId; });

  /* ── Si no existe la obra, mostrar mensaje ── */
  if (!artwork) {
    document.getElementById('viewer-main').innerHTML =
      '<div style="text-align:center;padding:6rem 2rem;">' +
      '<h2 style="font-family:Oswald,sans-serif;font-size:2.5rem;text-transform:uppercase;">Obra no encontrada</h2>' +
      '<a href="coleccion.html" style="color:#B8924A;font-family:Raleway,sans-serif;margin-top:1rem;display:inline-block;">← Volver a la colección</a>' +
      '</div>';
    return;
  }

  /* ── Referencias a elementos del DOM ── */
  var mainImg       = document.getElementById('viewer-image');
  var titleEl       = document.getElementById('viewer-title');
  var artistEl      = document.getElementById('viewer-artist');
  var yearEl        = document.getElementById('viewer-year');
  var pageTitle     = document.getElementById('viewer-page-title');
  var btnInfo       = document.getElementById('btn-info');
  var btnDetails    = document.getElementById('btn-details');
  var panelInfo     = document.getElementById('panel-info');
  var panelDetails  = document.getElementById('panel-details');
  var btnPrev       = document.getElementById('btn-prev');
  var btnNext       = document.getElementById('btn-next');
  var btnShare      = document.getElementById('btn-share');
  var btnBack       = document.getElementById('btn-back');
  var infoArtist    = document.getElementById('info-artist');
  var infoTitle     = document.getElementById('info-title');
  var infoYear      = document.getElementById('info-year');
  var infoDesc      = document.getElementById('info-desc');
  var infoCatVal    = document.getElementById('info-cat-value');
  var detailsContent = document.getElementById('details-content');
  var relatedGrid   = document.getElementById('related-grid');

  /* ── Estado del zoom ── */
  var zoomLevel  = 1;
  var panX       = 0;
  var panY       = 0;
  var isDragging = false;
  var lastX      = 0;
  var lastY      = 0;

  /* ── Estado de los paneles ── */
  var infoOpen    = false;
  var detailsOpen = false;

  /* Estado del detalle activo (zoom iconográfico) */
  var activeDetailIndex = 0;
  var details = artwork.details || [];

  /* ────────────────────────────────────────────────────────
     POBLAR LA OBRA
  ──────────────────────────────────────────────────────── */
  function loadArtwork(art) {
    /* Imagen principal */
    if (mainImg) {
      mainImg.src = art.imageUrl;
      mainImg.alt = art.title;
      /* Resetear zoom al cambiar de obra */
      resetZoom();
    }

    /* Metadatos en la barra inferior */
    if (artistEl) artistEl.textContent = art.artist;
    if (titleEl)  titleEl.textContent  = art.title;
    if (yearEl)   yearEl.textContent   = art.year;
    if (pageTitle) pageTitle.textContent = art.title + ' — Presencias';

    /* Panel de info */
    if (infoArtist) infoArtist.textContent = art.artist;
    if (infoTitle)  infoTitle.textContent  = art.title;
    if (infoYear)   infoYear.textContent   = art.year;
    if (infoDesc)   infoDesc.textContent   = art.description || '';
    if (infoCatVal) infoCatVal.textContent = CATEGORY_LABELS[art.category] || art.category;

    /* Panel de detalles iconográficos */
    details = art.details || [];
    activeDetailIndex = 0;
    renderDetailsPanel();
  }

  /* Mapa de categorías → etiqueta en español */
  var CATEGORY_LABELS = {
    secular:  'Obras Seculares',
    religious: 'Obras Religiosas',
    portrait: 'Retratos',
    castas:   'Pinturas de Castas'
  };

  /* ────────────────────────────────────────────────────────
     ZOOM + PANNING
  ──────────────────────────────────────────────────────── */
  var imageArea = document.getElementById('viewer-area');

  if (imageArea) {
    /* Zoom con rueda del ratón */
    imageArea.addEventListener('wheel', function (e) {
      e.preventDefault();
      var delta   = e.deltaY * -0.001;
      var newZoom = Math.min(4, Math.max(1, zoomLevel + delta));
      zoomLevel = newZoom;
      if (zoomLevel === 1) { panX = 0; panY = 0; }
      applyTransform();
    }, { passive: false });

    /* Inicio del arrastre */
    imageArea.addEventListener('mousedown', function (e) {
      if (zoomLevel > 1) {
        isDragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
        imageArea.style.cursor = 'grabbing';
      }
    });

    /* Mover */
    imageArea.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
      panX += e.clientX - lastX;
      panY += e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      applyTransform();
    });

    /* Fin del arrastre */
    function stopDrag() {
      isDragging = false;
      imageArea.style.cursor = zoomLevel > 1 ? 'grab' : 'default';
    }

    imageArea.addEventListener('mouseup',    stopDrag);
    imageArea.addEventListener('mouseleave', stopDrag);
  }

  /* Botones de zoom en la toolbar */
  var btnZoomIn  = document.getElementById('btn-zoom-in');
  var btnZoomOut = document.getElementById('btn-zoom-out');
  var btnZoomReset = document.getElementById('btn-zoom-reset');

  if (btnZoomIn)    btnZoomIn.addEventListener('click',    function () { zoomLevel = Math.min(4, zoomLevel + 0.5); applyTransform(); });
  if (btnZoomOut)   btnZoomOut.addEventListener('click',   function () { zoomLevel = Math.max(1, zoomLevel - 0.5); if (zoomLevel === 1) { panX = 0; panY = 0; } applyTransform(); });
  if (btnZoomReset) btnZoomReset.addEventListener('click', function () { resetZoom(); });

  function applyTransform() {
    if (!mainImg) return;
    mainImg.style.transform =
      'scale(' + zoomLevel + ') translate(' +
      (panX / zoomLevel) + 'px, ' +
      (panY / zoomLevel) + 'px)';
    mainImg.style.transition = isDragging ? 'none' : 'transform 100ms ease-out';

    /* Actualizar cursor según nivel de zoom */
    if (imageArea) {
      imageArea.style.cursor = zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default';
    }
  }

  function resetZoom() {
    zoomLevel = 1;
    panX = 0;
    panY = 0;
    applyTransform();
  }

  /* ────────────────────────────────────────────────────────
     PANEL DE INFO
  ──────────────────────────────────────────────────────── */
  if (btnInfo) {
    btnInfo.addEventListener('click', function () {
      infoOpen = !infoOpen;
      detailsOpen = false;

      togglePanel(panelInfo, infoOpen);
      togglePanel(panelDetails, false);

      btnInfo.classList.toggle('active', infoOpen);
      if (btnDetails) btnDetails.classList.remove('active');
    });
  }

  /* Botón de cerrar panel info */
  var btnCloseInfo = document.getElementById('btn-close-info');
  if (btnCloseInfo) {
    btnCloseInfo.addEventListener('click', function () {
      infoOpen = false;
      togglePanel(panelInfo, false);
      if (btnInfo) btnInfo.classList.remove('active');
    });
  }

  /* ────────────────────────────────────────────────────────
     PANEL DE DETALLES ICONOGRÁFICOS
  ──────────────────────────────────────────────────────── */
  if (btnDetails) {
    btnDetails.addEventListener('click', function () {
      detailsOpen = !detailsOpen;
      infoOpen = false;

      togglePanel(panelDetails, detailsOpen);
      togglePanel(panelInfo, false);

      btnDetails.classList.toggle('active', detailsOpen);
      if (btnInfo) btnInfo.classList.remove('active');

      /* Resetear zoom al abrir detalles */
      if (detailsOpen) resetZoom();
    });
  }

  /* Botón de cerrar panel detalles */
  var btnCloseDetails = document.getElementById('btn-close-details');
  if (btnCloseDetails) {
    btnCloseDetails.addEventListener('click', function () {
      detailsOpen = false;
      togglePanel(panelDetails, false);
      if (btnDetails) btnDetails.classList.remove('active');
    });
  }

  /**
   * Mostrar / ocultar un panel deslizable.
   * @param {HTMLElement|null} panel
   * @param {boolean} show
   */
  function togglePanel(panel, show) {
    if (!panel) return;
    if (show) {
      panel.style.display = 'block';
      panel.classList.add('animate-fadeIn');
    } else {
      panel.style.display = 'none';
      panel.classList.remove('animate-fadeIn');
    }
  }

  /* ────────────────────────────────────────────────────────
     DETALLES (ZOOMS ICONOGRÁFICOS)
  ──────────────────────────────────────────────────────── */
  function renderDetailsPanel() {
    if (!detailsContent) return;

    if (!details.length) {
      /* Sin detalles disponibles */
      detailsContent.innerHTML =
        '<p style="color:#6A6460;font-family:Raleway,sans-serif;font-size:0.875rem;">' +
        'Esta obra no tiene detalles con zoom disponibles por el momento.</p>';
      return;
    }

    /* Thumbnails en la parte superior */
    var thumbsHtml = details.map(function (d, i) {
      return '<button class="detail-thumb' + (i === 0 ? ' active' : '') + '" ' +
        'data-index="' + i + '" ' +
        'aria-label="' + d.title + '" ' +
        'style="width:64px;height:64px;border-radius:4px;overflow:hidden;border:2px solid ' +
        (i === 0 ? '#B8924A' : 'transparent') + ';opacity:' + (i === 0 ? '1' : '0.5') + ';' +
        'cursor:pointer;background:#2A2620;flex-shrink:0;transition:all 300ms;">' +
        '<img src="' + artwork.imageUrl + '" alt="' + d.title + '" ' +
        'style="width:100%;height:100%;object-fit:cover;' +
        'transform:scale(' + d.zoom.scale + ') translate(-' + d.zoom.x + '%, -' + d.zoom.y + '%);" />' +
        '</button>';
    }).join('');

    var activeDetail = details[activeDetailIndex];

    detailsContent.innerHTML =
      '<div style="display:flex;gap:0.5rem;margin-bottom:1.5rem;flex-wrap:wrap;">' + thumbsHtml + '</div>' +
      '<p style="font-size:0.75rem;color:#6A6460;font-family:Raleway,sans-serif;margin-bottom:0.5rem;">' +
        (activeDetailIndex + 1) + ' de ' + details.length +
      '</p>' +
      '<h3 id="detail-title" style="font-family:Raleway,sans-serif;font-size:1.25rem;color:#D9CEC5;margin-bottom:1rem;">' +
        activeDetail.title +
      '</h3>' +
      '<p id="detail-desc" style="font-family:Raleway,sans-serif;font-size:0.875rem;color:#D9CEC5;line-height:1.75;">' +
        activeDetail.description +
      '</p>' +
      /* Dots de navegación */
      '<div style="display:flex;gap:0.5rem;justify-content:center;margin-top:2rem;">' +
        details.map(function (_, i) {
          return '<button class="detail-dot" data-index="' + i + '" ' +
            'style="width:8px;height:8px;border-radius:50%;border:none;cursor:pointer;' +
            'background:' + (i === activeDetailIndex ? '#B8924A' : '#6A6460') + ';' +
            'transition:background 200ms;"></button>';
        }).join('') +
      '</div>';

    /* Eventos para los thumbnails */
    detailsContent.querySelectorAll('.detail-thumb').forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var idx = parseInt(thumb.dataset.index);
        switchDetail(idx);
      });
    });

    /* Eventos para los dots */
    detailsContent.querySelectorAll('.detail-dot').forEach(function (dot) {
      dot.addEventListener('click', function () {
        var idx = parseInt(dot.dataset.index);
        switchDetail(idx);
      });
    });
  }

  /**
   * Cambiar al detalle en el índice dado y aplicar zoom a la imagen.
   * @param {number} index
   */
  function switchDetail(index) {
    if (index < 0 || index >= details.length) return;
    activeDetailIndex = index;

    var detail = details[index];

    /* Aplicar zoom y pan para enfocar el detalle */
    zoomLevel = detail.zoom.scale;
    panX      = -(detail.zoom.x / 100) * (mainImg ? mainImg.offsetWidth  : 0) * (zoomLevel - 1);
    panY      = -(detail.zoom.y / 100) * (mainImg ? mainImg.offsetHeight : 0) * (zoomLevel - 1);
    applyTransform();

    /* Re-renderizar el panel con el nuevo detalle activo */
    renderDetailsPanel();
  }

  /* ────────────────────────────────────────────────────────
     NAVEGACIÓN PREV / NEXT
  ──────────────────────────────────────────────────────── */
  if (btnPrev) {
    btnPrev.addEventListener('click', function () {
      var prevIndex = currentIndex > 0 ? currentIndex - 1 : artworks.length - 1;
      navigateTo(artworks[prevIndex].id);
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', function () {
      var nextIndex = currentIndex < artworks.length - 1 ? currentIndex + 1 : 0;
      navigateTo(artworks[nextIndex].id);
    });
  }

  /**
   * Navegar a otra obra actualizando la URL y recargando el contenido.
   * @param {string} id
   */
  function navigateTo(id) {
    window.location.href = 'coleccion.html?obra=' + id;
  }

  /* ────────────────────────────────────────────────────────
     BOTÓN DE COMPARTIR
  ──────────────────────────────────────────────────────── */
  if (btnShare) {
    btnShare.addEventListener('click', function () {
      var shareData = {
        title: artwork.title + ' — Presencias',
        text:  'Mira esta obra: ' + artwork.title + ' de ' + artwork.artist,
        url:   window.location.href
      };

      /* Usar Web Share API si está disponible (móvil) */
      if (navigator.share) {
        navigator.share(shareData).catch(function () {});
      } else {
        /* Fallback: copiar URL al portapapeles */
        navigator.clipboard.writeText(window.location.href).then(function () {
          showToast('Enlace copiado al portapapeles');
        }).catch(function () {
          showToast('URL: ' + window.location.href);
        });
      }
    });
  }

  /** Mostrar una notificación temporal */
  function showToast(msg) {
    var toast = document.getElementById('share-toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
    }, 2500);
  }

  /* ────────────────────────────────────────────────────────
     BOTÓN VOLVER
  ──────────────────────────────────────────────────────── */
  if (btnBack) {
    btnBack.addEventListener('click', function () {
      /* Intentar volver a la página anterior; si no hay, ir a colección */
      if (document.referrer && document.referrer.indexOf(window.location.hostname) !== -1) {
        history.back();
      } else {
        window.location.href = 'coleccion.html';
      }
    });
  }

  /* ────────────────────────────────────────────────────────
     CARRUSEL DE OBRAS RELACIONADAS
  ──────────────────────────────────────────────────────── */
  function renderRelated() {
    if (!relatedGrid) return;

    /* Obtener obras de la misma categoría (máx. 6) */
    var related = artworks.filter(function (a) {
      return a.id !== artwork.id && a.category === artwork.category;
    }).slice(0, 6);

    if (!related.length) {
      var section = document.getElementById('related-section');
      if (section) section.style.display = 'none';
      return;
    }

    relatedGrid.innerHTML = related.map(function (a) {
      return '<a href="coleccion.html?obra=' + a.id + '" class="artwork-card">' +
        '<div class="artwork-card__img">' +
          '<img src="' + a.imageUrl + '" alt="' + a.title + '" loading="lazy" />' +
          '<div class="artwork-card__overlay">' +
            '<h3>' + a.title + '</h3>' +
            '<span class="artist">' + a.artist + '</span>' +
            '<span class="year">'   + a.year   + '</span>' +
          '</div>' +
        '</div>' +
      '</a>';
    }).join('');
  }

  /* ────────────────────────────────────────────────────────
     INICIALIZAR
  ──────────────────────────────────────────────────────── */
  loadArtwork(artwork);
  renderRelated();

  /* Occultar paneles inicialmente */
  if (panelInfo)    panelInfo.style.display    = 'none';
  if (panelDetails) panelDetails.style.display = 'none';

});
