/**
 * PRESENCIAS — Exposición Virtual de Arte Colonial
 * artworks.js — Datos de las 15 obras de la colección
 *
 * Las imágenes locales referencian la carpeta ../assets/images/
 * Las demás usan URLs de Unsplash (reemplazar con imágenes reales al publicar).
 *
 * Cada obra tiene:
 *   - id, title, artist, year, category
 *   - imageUrl: ruta o URL de la imagen
 *   - description: texto descriptivo
 *   - featured (opcional): aparecer en el carrusel del home
 *   - details (opcional): zooms iconográficos para el viewer
 */

window.ARTWORKS = [
  {
    id: "1",
    title: "Escena de Mercado Colonial",
    artist: "Anónimo",
    year: "c. 1680-1700",
    category: "secular",
    imageUrl: "https://images.unsplash.com/photo-1586794349756-8b6690599bc8?w=800",
    description: "Esta obra muestra una escena vibrante de mercado donde afrodescendientes aparecen como comerciantes activos, desmintiendo la narrativa simplista de la esclavitud.",
    featured: true
  },
  {
    id: "2",
    title: "Cosecha en las Plantaciones",
    artist: "Anónimo",
    year: "c. 1650-1680",
    category: "secular",
    imageUrl: "https://images.unsplash.com/photo-1574788175339-a53dcba9a9bd?w=800",
    description: "Representación de trabajadores afrodescendientes en labores agrícolas, revelando la complejidad de roles más allá de la esclavitud.",
    featured: true
  },
  {
    id: "3",
    title: "Retrato de Dama con Acompañante",
    artist: "Escuela Cuzqueña",
    year: "c. 1720-1750",
    category: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1745758278428-d733e4d66a74?w=800",
    description: "Este retrato muestra la presencia de afrodescendientes en contextos domésticos de élite, ocupando posiciones de confianza.",
    featured: true
  },
  {
    id: "4",
    title: "Paisaje Colonial con Figuras",
    artist: "Anónimo",
    year: "c. 1690-1720",
    category: "secular",
    imageUrl: "https://images.unsplash.com/photo-1719339285288-0790b8867c6e?w=800",
    description: "Escena que documenta la vida cotidiana en asentamientos coloniales con presencia diversa."
  },
  {
    id: "5",
    title: "Escena de Aldea",
    artist: "Anónimo",
    year: "c. 1670-1700",
    category: "secular",
    imageUrl: "https://images.unsplash.com/photo-1719339285311-2e4f59f6a3bc?w=800",
    description: "Representación de la vida comunitaria en el periodo colonial."
  },
  {
    id: "6",
    title: "Reunión bajo el Árbol",
    artist: "Anónimo",
    year: "c. 1700-1730",
    category: "secular",
    imageUrl: "https://images.unsplash.com/photo-1678380601766-32d249ad08d5?w=800",
    description: "Escena de reunión social que muestra la diversidad de la sociedad colonial."
  },
  {
    id: "7",
    title: "Jinete Colonial",
    artist: "Anónimo",
    year: "c. 1710-1740",
    category: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1700145419565-284042a9c8e0?w=800",
    description: "Retrato ecuestre que demuestra posiciones de autoridad ocupadas por afrodescendientes."
  },
  {
    id: "8",
    title: "Vista Costera Colonial",
    artist: "Anónimo",
    year: "c. 1680-1710",
    category: "secular",
    imageUrl: "https://images.unsplash.com/photo-1711315506349-8fc2827a3983?w=800",
    description: "Paisaje costero que documenta la actividad portuaria y comercial."
  },
  {
    id: "9",
    title: "Escena Campestre",
    artist: "Anónimo",
    year: "c. 1690-1720",
    category: "secular",
    imageUrl: "https://images.unsplash.com/photo-1588260275819-27c6226610b0?w=800",
    description: "Representación de actividades rurales en el contexto colonial."
  },
  {
    id: "10",
    title: "Composición Religiosa",
    artist: "Escuela Cuzqueña",
    year: "c. 1700-1730",
    category: "religious",
    imageUrl: "https://images.unsplash.com/photo-1763495234815-a11de1719cdb?w=800",
    description: "Obra religiosa que incluye figuras afrodescendientes en contextos sagrados, reconociendo su rol en la vida espiritual colonial."
  },
  {
    id: "11",
    title: "Negro de Guinea y Española",
    artist: "Anónimo",
    year: "c. 1750-1780",
    category: "castas",
    imageUrl: "../assets/images/castas-1365.jpg",
    description: "Representación del sistema de castas colonial que clasificaba a las personas según su ascendencia racial. Esta obra muestra la unión entre una mujer negra de Guinea y un español, con su descendencia.",
    featured: true,
    details: [
      {
        id: 1,
        title: "Joyería y Ornamentos",
        description: "Detalle de los aretes y adornos de la mujer negra, que demuestra su estatus y posición social en la sociedad colonial. Los pendientes de perla y los detalles en oro reflejan riqueza y refinamiento.",
        zoom: { x: 30, y: 15, scale: 1.8 }
      },
      {
        id: 2,
        title: "Vestido con Patrones Elaborados",
        description: "El vestido azul presenta intrincados patrones dorados y bordados que evidencian la alta calidad de las telas y el trabajo artesanal.",
        zoom: { x: 20, y: 40, scale: 1.7 }
      },
      {
        id: 3,
        title: "El Niño Mulato",
        description: "La representación del niño mestizo muestra las características raciales mezcladas que el sistema de castas buscaba documentar.",
        zoom: { x: 10, y: 25, scale: 2.0 }
      }
    ]
  },
  {
    id: "12",
    title: "Pintura de Castas II",
    artist: "Anónimo",
    year: "c. 1760-1790",
    category: "castas",
    imageUrl: "../assets/images/castas-1364.jpg",
    description: "Serie documental de las mezclas raciales en la sociedad colonial."
  },
  {
    id: "13",
    title: "De Negro e India, Cambuja",
    artist: "Anónimo",
    year: "c. 1760-1780",
    category: "castas",
    imageUrl: "../assets/images/castas-3406.jpg",
    description: "Esta pintura representa la unión entre un hombre negro y una mujer india, y su hija cambuja. La naturaleza muerta del primer plano documenta frutos endémicos americanos con rigor taxonómico.",
    featured: true,
    details: [
      {
        id: 1,
        title: "Naturaleza Muerta de Frutos Endémicos",
        description: "Taxonomía botánica de frutos americanos: tunas, plátanos pasote, zapotes, duraznos, jícamas, ciruelas y chirimoyas. Reflejo del inventariado científico del Nuevo Mundo.",
        zoom: { x: 40, y: 55, scale: 2.0 }
      },
      {
        id: 2,
        title: "Vestimenta Indígena de Élite",
        description: "La madre viste un huipil finamente confeccionado con rebozo ornamentado de motivos fitomórficos y zoomórficos, evidenciando estatus socioeconómico.",
        zoom: { x: 40, y: 20, scale: 1.9 }
      },
      {
        id: 3,
        title: "Redingote del Cochero",
        description: "El padre porta una casaca de origen anglosajón (redingote), librea de cochero con chaleco blanco y sombrero. Ocupación urbana recurrente entre afrodescendientes en la Ciudad de México.",
        zoom: { x: 10, y: 18, scale: 2.3 }
      },
      {
        id: 4,
        title: "Asimilación Cultural de la Descendencia",
        description: "La niña cambuja porta vestido a la española con tela damasquinada, contrastando con la indumentaria indígena de su madre. Sincretización cultural formalizada en la vestimenta.",
        zoom: { x: 0, y: 0, scale: 2.9 }
      }
    ]
  },
  {
    id: "14",
    title: "Santo Domingo y la familia de los condes de Casa Bayona",
    artist: "José Nicolás de la Escalera",
    year: "c. 1760-1780",
    category: "religious",
    imageUrl: "../assets/images/religious-11484.jpg",
    description: "Obra religiosa que representa a Santo Domingo junto a la familia de los condes de Casa Bayona, evidenciando la presencia de afrodescendientes en contextos devocionales y su relación con la élite colonial.",
    featured: true
  },
  {
    id: "15",
    title: "Retrato de Familia Colonial",
    artist: "Anónimo",
    year: "c. 1750-1780",
    category: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800",
    description: "Retrato que documenta la presencia de afrodescendientes en el ámbito doméstico de familias coloniales."
  }
];

/**
 * Obtener obras por categoría
 * @param {string} category - 'secular' | 'religious' | 'portrait' | 'castas'
 * @returns {Array}
 */
window.getArtworksByCategory = function (category) {
  return window.ARTWORKS.filter(function (a) { return a.category === category; });
};

/**
 * Obtener obras destacadas (featured: true)
 * @returns {Array}
 */
window.getFeaturedArtworks = function () {
  return window.ARTWORKS.filter(function (a) { return a.featured; });
};

/**
 * Obtener obra por ID
 * @param {string} id
 * @returns {Object|undefined}
 */
window.getArtworkById = function (id) {
  return window.ARTWORKS.find(function (a) { return a.id === id; });
};
