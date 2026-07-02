/**
 * PRESENCIAS — Exposición Virtual de Arte Colonial
 * artworks.js — Datos de las 15 obras de la colección
 *
 * Las imágenes locales referencian la carpeta ../assets/images/
 *
 * Cada obra tiene:
 *   - id, title, artist, year, category
 *   - imageUrl: ruta o URL de la imagen
 *   - description: texto descriptivo
 *   - location: institución/colección donde se conserva la obra
 *   - provenance: procedencia geográfica/histórica de la obra
 *   - objects: objetos representados en la escena
 *   - inscription: presencia y tipo de inscripción en la obra
 *   - featured (opcional): aparecer en el carrusel del home
 *   - details: 3 zooms iconográficos para el viewer — siempre uno enfocado
 *     en la(s) persona(s) afrodescendiente(s) presentes en la obra, y dos
 *     más sobre objetos, gestos o símbolos relevantes.
 *
 * Los títulos originales de las obras se mantienen en su idioma histórico;
 * el resto de los campos de texto está en inglés.
 */

window.ARTWORKS = [
  {
    id: "1",
    title: "De Negro, y de India, China Cambuja",
    artist: "Miguel Cabrera",
    year: "1763",
    category: "castas",
    imageUrl: "../assets/images/castas-3406.jpg",
    description: "This painting represents the union between a Black man and an Indigenous woman, and their cambuja daughter. The still life in the foreground documents endemic American fruits with taxonomic rigor.",
    location: "Museum of America, Madrid, Spain",
    provenance: "Mexico City, Mexico",
    objects: "None",
    inscription: "Inscription",
    featured: true,
    details: [
      {
        id: 1,
        title: "The Afro-descendant Father",
        description: "Portrait of the Black father, the central figure of the family composition, whose pensive gesture with his hand on his face converses directly with the gaze of the Indigenous mother.",
        zoom: { x: 42, y: 26, scale: 2.3 }
      },
      {
        id: 2,
        title: "The Coachman's Redingote",
        description: "The father wears a coat of Anglo-Saxon origin (a redingote), a coachman's livery — a common urban occupation among Afro-descendant people in Mexico City.",
        zoom: { x: 38, y: 58, scale: 1.9 }
      },
      {
        id: 3,
        title: "Cultural Assimilation of the Offspring",
        description: "The cambuja girl wears Spanish-style dress in damasked fabric, contrasting with her mother's Indigenous attire — a cultural syncretism formalized through clothing.",
        zoom: { x: 20, y: 50, scale: 2.0 }
      }
    ]
  },
  {
    id: "2",
    title: "Santo Domingo y la familia de los condes de Casa Bayona",
    artist: "José Nicolás de la Escalera",
    year: "c. 1754-1804",
    category: "religious",
    imageUrl: "../assets/images/religious-11484.jpg",
    description: "A religious work portraying Santo Domingo alongside the family of the Counts of Casa Bayona, evidencing the presence of Afro-descendant people in devotional contexts and their relationship with the colonial elite.",
    location: "Church of Santa María del Rosario, Havana, Cuba",
    provenance: "Havana",
    objects: "Book",
    inscription: "Cartouche",
    featured: true,
    details: [
      {
        id: 1,
        title: "The Afro-descendant Page",
        description: "A young Afro-descendant page, dressed in livery, appears at the foot of the devotional scene — a silent testimony to the Black presence in the elite's domestic spaces.",
        zoom: { x: 58, y: 52, scale: 2.4 }
      },
      {
        id: 2,
        title: "The Book and the Lily of Santo Domingo",
        description: "The saint's iconographic attributes — the Dominican order's book and the lily of purity — frame the family's preaching scene.",
        zoom: { x: 48, y: 20, scale: 2.0 }
      },
      {
        id: 3,
        title: "The Commemorative Cartouche",
        description: "The cartouche below records the devotion of the Counts of Casa Bayona's family to Santo Domingo de Guzmán.",
        zoom: { x: 50, y: 88, scale: 1.8 }
      }
    ]
  },
  {
    id: "3",
    title: "The Old Plantation",
    artist: "Attributed to John Rose",
    year: "c. 1785-1795",
    category: "secular",
    imageUrl: "../assets/images/secular-90001.jpg",
    description: "Considered one of the earliest depictions of African American culture in the United States, this watercolor documents a dance and music of West African tradition — banjo, gudugudu drum, and gourd rattles — within the setting of a slave plantation.",
    location: "Abby Aldrich Rockefeller Folk Art Museum, Williamsburg, Virginia, USA",
    provenance: "A plantation in present-day Beaufort County, South Carolina",
    objects: "Banjo, drum, rattles, dance sticks",
    inscription: "No inscription",
    featured: true,
    details: [
      {
        id: 1,
        title: "The Afro-descendant Dancers",
        description: "The central group of dancers, enslaved on a South Carolina plantation, performs a dance rooted in West African tradition before the gaze of the community.",
        zoom: { x: 50, y: 55, scale: 2.0 }
      },
      {
        id: 2,
        title: "The Gourd Banjo",
        description: "A stringed instrument derived from West African traditions, this is one of the earliest visual records of the banjo in North America.",
        zoom: { x: 82, y: 70, scale: 2.2 }
      },
      {
        id: 3,
        title: "Rattles and Dance Sticks",
        description: "The women on the left hold gourd rattles (shekeres) and handkerchiefs, keeping the rhythm of the collective dance.",
        zoom: { x: 15, y: 60, scale: 2.0 }
      }
    ]
  },
  {
    id: "4",
    title: "Los mulatos de Esmeraldas",
    artist: "Andrés Sánchez Gallque",
    year: "1599",
    category: "portrait",
    imageUrl: "../assets/images/portrait-90002.jpg",
    description: "A pioneering portrait of American maroon resistance: it depicts Francisco de Arobe and his sons, free mulatto leaders of Esmeraldas who swore vassalage to the Spanish Crown, adorned with African spears, Andean jewelry, and European silks.",
    location: "Museum of America, Madrid, Spain (on deposit; Prado Museum collection)",
    provenance: "Sent from the Real Audiencia of Quito to Spain, 1599",
    objects: "Spears, jewelry, hats",
    inscription: "No inscription",
    featured: true,
    details: [
      {
        id: 1,
        title: "Don Francisco de Arobe",
        description: "The face of the maroon leader Francisco de Arobe, portrayed with the dignity and authority of a nobleman, leads his sons in this historic portrait of vassalage.",
        zoom: { x: 48, y: 20, scale: 2.4 }
      },
      {
        id: 2,
        title: "Andean Indigenous Jewelry",
        description: "Gold nose rings, ear ornaments, and necklaces of Andean tradition combine with Spanish ruffs, evidencing a hybrid identity.",
        zoom: { x: 50, y: 38, scale: 2.0 }
      },
      {
        id: 3,
        title: "Silver-Tipped Spears",
        description: "The African spears with silver tips carried by the three men function as insignia of territorial and military authority.",
        zoom: { x: 75, y: 55, scale: 1.8 }
      }
    ]
  },
  {
    id: "5",
    title: "Black Artist Completing a Portrait of Maria Anna of Austria",
    artist: "Unknown (possibly Brazilian school)",
    year: "c. 1700-1750",
    category: "portrait",
    imageUrl: "../assets/images/portrait-90003.jpg",
    description: "A singular portrait depicting an Afro-descendant artist in the act of painting a royal figure's portrait, documenting an intellectual and creative role uncommon in colonial iconography.",
    location: "Private collection, Philadelphia (provenance); offered by Carlton Hobbs LLC",
    provenance: "Michael Hogg Gallery, Knightsbridge, London, 1967; private collection, Philadelphia",
    objects: "Brushes, canvas, easel (implied)",
    inscription: "No inscription",
    details: [
      {
        id: 1,
        title: "The Afro-descendant Artist",
        description: "The Black painter, the scene's protagonist, looks directly at the viewer while portraying a royal figure — an exceptional intellectual and creative role within colonial iconography.",
        zoom: { x: 30, y: 45, scale: 2.2 }
      },
      {
        id: 2,
        title: "Brushes and Palette",
        description: "The tools of the painter's trade — brushes, cloths, and palette — document the artist's technical mastery.",
        zoom: { x: 68, y: 87, scale: 1.9 }
      },
      {
        id: 3,
        title: "The Portrait Within the Portrait",
        description: "The artist's hand holds the brush at the very moment of finishing the portrait of the royal figure depicted within the canvas.",
        zoom: { x: 75, y: 55, scale: 1.8 }
      }
    ]
  },
  {
    id: "6",
    title: "Negra de Guinea criolla. Español. Producen Mulato.",
    artist: "Anonymous",
    year: "1770",
    category: "castas",
    imageUrl: "../assets/images/castas-1365.jpg",
    description: "A representation of the colonial casta system that classified people according to racial ancestry. This work shows the union between a Black woman from Guinea and a Spanish man, with their offspring.",
    location: "National Museum of Anthropology (formerly National Museum of Ethnology), Madrid, Spain",
    provenance: "Lima, Peru",
    objects: "None",
    inscription: "Inscription",
    featured: true,
    details: [
      {
        id: 1,
        title: "The Creole Black Woman from Guinea",
        description: "Portrait of the creole Black woman, whose raised hand gesture converses with the Spanish man beside her, synthesizing the interracial union the painting documents.",
        zoom: { x: 38, y: 20, scale: 2.3 }
      },
      {
        id: 2,
        title: "Silk Dress with Floral Motifs",
        description: "The dress displays intricate embroidered patterns in blue and white, evidencing the high quality of the fabric and craftsmanship.",
        zoom: { x: 45, y: 60, scale: 1.8 }
      },
      {
        id: 3,
        title: "The Child and the Coins",
        description: "The mestizo child and the coins visible in the foreground allude to family wealth and the racial genealogy the painting seeks to classify.",
        zoom: { x: 15, y: 88, scale: 2.3 }
      }
    ]
  },
  {
    id: "7",
    title: "Martín Porres",
    artist: "Anonymous",
    year: "c. 1700-1799",
    category: "religious",
    imageUrl: "../assets/images/religious-1046.jpg",
    description: "A devotional representation of Saint Martín de Porres, the Afro-descendant Dominican friar of Lima, shown in his conventual life alongside the symbols of humility and charity that defined his sainthood.",
    location: "Barbosa-Stern Collection, Lima, Peru",
    provenance: "Lima",
    objects: "Broom",
    inscription: "Cartouche",
    details: [
      {
        id: 1,
        title: "Saint Martín de Porres",
        description: "The serene face of the Afro-Peruvian Dominican saint, the first Afro-descendant saint of the Americas, portrayed in his lay friar's habit.",
        zoom: { x: 42, y: 14, scale: 2.2 }
      },
      {
        id: 2,
        title: "The Basket of Bread",
        description: "The basket of bread he carries alludes to his legendary charity and the miracles of multiplying food attributed to the saint.",
        zoom: { x: 50, y: 65, scale: 2.0 }
      },
      {
        id: 3,
        title: "The Dog and the Cat",
        description: "At his feet, a dog and a cat coexist peacefully, symbolizing the miracle of harmony among species associated with Martín de Porres.",
        zoom: { x: 12, y: 92, scale: 2.6 }
      }
    ]
  },
  {
    id: "8",
    title: "Francis Williams, the Scholar of Jamaica",
    artist: "Unknown (possibly a self-portrait; William Williams, 1721–1791, has been proposed)",
    year: "c. 1760",
    category: "portrait",
    imageUrl: "../assets/images/portrait-90004.jpg",
    description: "A portrait of Francis Williams, a Jamaican scholar of African descent, surrounded by terrestrial and celestial globes, scientific instruments, and books — including Newton's Principia — documenting his intellectual achievements as a free Black man in the 18th century.",
    location: "Victoria and Albert Museum, London, United Kingdom (George Levy Gallery, Room 52)",
    provenance: "Collection of Major H. Howard of Hampton Lodge (direct descendant of Edward Long); acquired by Spink and Son Ltd. in 1928 and donated to the V&A",
    objects: "Terrestrial globe, celestial globe, books, compass, drawing instruments, table",
    inscription: "No inscription",
    featured: true,
    details: [
      {
        id: 1,
        title: "Francis Williams",
        description: "The Jamaican scholar poses with the dignity of an enlightened gentleman, a singular portrait of a free Black man recognized for his intellectual achievements in the 18th century.",
        zoom: { x: 45, y: 18, scale: 2.4 }
      },
      {
        id: 2,
        title: "The Terrestrial and Celestial Globes",
        description: "The terrestrial and celestial globes symbolize his training in astronomy and science, knowledge ideally reserved for the European elite.",
        zoom: { x: 75, y: 55, scale: 1.9 }
      },
      {
        id: 3,
        title: "Newton's Principia",
        description: "His hand rests on the open Principia by Newton, while he points toward his personal library, asserting his intellectual authority.",
        zoom: { x: 47, y: 63, scale: 2.2 }
      }
    ]
  },
  {
    id: "9",
    title: "Señora Principal con su negra esclava",
    artist: "Vicente Albán",
    year: "1783",
    category: "castas",
    imageUrl: "../assets/images/castas-4232.jpg",
    description: "A costumbrista work portraying a principal lady of Quito accompanied by her enslaved Black woman, evidencing the racial hierarchical structure of Andean colonial society.",
    location: "Museum of America, Madrid, Spain",
    provenance: "Quito, Ecuador",
    objects: "Food / bread",
    inscription: "Cartouche",
    details: [
      {
        id: 1,
        title: "The Enslaved Woman",
        description: "The face of the enslaved Black woman, whose presence alongside the principal lady documents the racial hierarchy of Quito's colonial society.",
        zoom: { x: 40, y: 16, scale: 2.4 }
      },
      {
        id: 2,
        title: "The Gesture of Service",
        description: "Her extended hand offers fruit, an everyday gesture illustrating her domestic role within the elite household.",
        zoom: { x: 32, y: 40, scale: 2.1 }
      },
      {
        id: 3,
        title: "Still Life of Quito's Fruits",
        description: "The basket of fruits — granadillas, loquats, naranjillas — documents the region's botanical wealth and functions as a colonial visual inventory.",
        zoom: { x: 15, y: 45, scale: 1.8 }
      }
    ]
  },
  {
    id: "10",
    title: "De Negro i Española sale Mulato. Negro 1, Española 2, Mulato 3",
    artist: "Anonymous",
    year: "c. 1700-1799",
    category: "castas",
    imageUrl: "../assets/images/castas-3529.jpg",
    description: "A casta scene documenting the union between a Black man and a Spanish woman, and their mulatto son, in a domestic landscape with animals and toys denoting everyday family life.",
    location: "Private collection (Mexico City), Mexico City, Mexico",
    provenance: "Mexico City",
    objects: "Toy / game",
    inscription: "Inscription",
    details: [
      {
        id: 1,
        title: "The Black Father",
        description: "The Black man, richly dressed in a coat and tricorn hat, leads the family outing as a figure of authority and status.",
        zoom: { x: 38, y: 30, scale: 2.3 }
      },
      {
        id: 2,
        title: "Clasped Hands",
        description: "The gesture of clasped hands between the father and the Spanish mother visually formalizes the interracial union that produced the mulatto son.",
        zoom: { x: 45, y: 55, scale: 2.0 }
      },
      {
        id: 3,
        title: "The Child and His Toy Carriage",
        description: "The mulatto son plays with a small carriage pulled by an animal, a motif introducing childhood and play into the casta scene.",
        zoom: { x: 85, y: 75, scale: 2.2 }
      }
    ]
  },
  {
    id: "11",
    title: "Negros Bozales de Guinea. Yden.",
    artist: "Anonymous",
    year: "1770",
    category: "castas",
    imageUrl: "../assets/images/castas-1364.jpg",
    description: "A portrait of a couple of \"bozal\" Black people newly arrived from Guinea, documenting the colonial classification of enslaved Africans according to their ethnic origin and their relation to the childhood depicted in the scene.",
    location: "National Museum of Anthropology (formerly National Museum of Ethnology), Madrid, Spain",
    provenance: "Lima, Peru",
    objects: "None",
    inscription: "Inscription",
    details: [
      {
        id: 1,
        title: "The Bozal Black People",
        description: "The faces of the couple of \"bozal\" Black people, newly arrived from Guinea, document the colonial classification of enslaved Africans by ethnic origin and their recent arrival in the Americas.",
        zoom: { x: 30, y: 16, scale: 2.3 }
      },
      {
        id: 2,
        title: "The Fine Cloth Mantle",
        description: "The white mantle with gold embroidery wrapping the man contrasts with the label of poverty and begging assigned to the \"bozal\" Black people.",
        zoom: { x: 35, y: 60, scale: 1.9 }
      },
      {
        id: 3,
        title: "The Mother and Her Child",
        description: "The woman holds her child wrapped in red cloth, a gesture of maternal protection within the painting's taxonomic classification.",
        zoom: { x: 75, y: 70, scale: 2.2 }
      }
    ]
  },
  {
    id: "12",
    title: "Adoración de los reyes",
    artist: "Baltasar de Echave y Rioja",
    year: "1659",
    category: "religious",
    imageUrl: "../assets/images/religious-852.jpg",
    description: "A scene of the Adoration of the Magi in which the retinue includes Afro-descendant figures, reflecting their symbolic inclusion in New Spanish religious iconography.",
    location: "Figge Art Museum, Davenport, USA",
    provenance: "Mexico City, Mexico",
    objects: "None",
    inscription: "None",
    details: [
      {
        id: 1,
        title: "The Magus King Balthazar",
        description: "The face of Balthazar, traditionally depicted as the African king, is one of the rare figures of dignity and majesty granted to a Black man in colonial religious art.",
        zoom: { x: 68, y: 20, scale: 2.4 }
      },
      {
        id: 2,
        title: "The Offering of Myrrh",
        description: "The precious vessel Balthazar carries holds the myrrh, one of the three gifts offered to the Christ Child.",
        zoom: { x: 70, y: 48, scale: 2.0 }
      },
      {
        id: 3,
        title: "The Royal Crown",
        description: "His crown and feathered turban place him visually on the same level of majesty as the other two European kings.",
        zoom: { x: 68, y: 8, scale: 2.3 }
      }
    ]
  },
  {
    id: "13",
    title: "Exvoto de la Sagrada Familia",
    artist: "José Campeche",
    year: "1780",
    category: "religious",
    imageUrl: "../assets/images/religious-26967.jpg",
    description: "A devotional ex-voto of the Holy Family created by José Campeche, a Puerto Rican painter of African descent, one of the first Afro-descendant artists recognized by name in colonial American art.",
    location: "Institute of Puerto Rican Culture, San Juan, Puerto Rico",
    provenance: "San Juan",
    objects: "Cross, flowers",
    inscription: "None",
    details: [
      {
        id: 1,
        title: "The Afro-descendant Page",
        description: "A young Black servant carries a tray of floral offerings among the earthly attendants witnessing the celestial vision of the Holy Family.",
        zoom: { x: 10, y: 83, scale: 2.3 }
      },
      {
        id: 2,
        title: "The Servant with Flowers",
        description: "A Black woman holds a bouquet of flowers, part of the devotional procession surrounding the donor nun.",
        zoom: { x: 20, y: 85, scale: 2.1 }
      },
      {
        id: 3,
        title: "The Celestial Vision",
        description: "Above, the Holy Family and the Trinity receive the earthly devotion represented by the kneeling figures at the base of the composition.",
        zoom: { x: 50, y: 25, scale: 1.7 }
      }
    ]
  },
  {
    id: "14",
    title: "Baile rústico después del viaje en trineo",
    artist: "William Sidney Mount",
    year: "1830",
    category: "secular",
    imageUrl: "../assets/images/secular-12373.jpg",
    description: "A 19th-century costumbrista scene depicting a festive gathering with music and dance, documenting social life in the domestic spaces of the emerging American society.",
    location: "Museum of Fine Arts, Boston, USA",
    provenance: "Boston",
    objects: "Various objects",
    inscription: "None",
    details: [
      {
        id: 1,
        title: "The Afro-descendant Fiddler",
        description: "The Black musician, seated with his fiddle, provides the soundtrack for the festive gathering, a recurring role of Afro-descendant musicians in 19th-century American social life.",
        zoom: { x: 17, y: 60, scale: 2.3 }
      },
      {
        id: 2,
        title: "The Bow and the Strings",
        description: "His hands, in full motion over the fiddle, capture the musical moment animating the dance.",
        zoom: { x: 22, y: 72, scale: 2.2 }
      },
      {
        id: 3,
        title: "The Dancing Couple",
        description: "The lively steps of the central couple document the rustic dances of a young American society.",
        zoom: { x: 60, y: 75, scale: 1.8 }
      }
    ]
  },
  {
    id: "15",
    title: "Mujer libre de color con sus hijos y sirvientes en un paisaje",
    artist: "Agostino Brunias",
    year: "c. 1770-1796",
    category: "secular",
    imageUrl: "../assets/images/secular-11038.jpg",
    description: "A Caribbean costumbrista scene portraying a free woman of color and her family, accompanied by enslaved servants, documenting the social stratification between free and enslaved people of African descent in the British Caribbean colonies.",
    location: "Brooklyn Museum, New York, USA",
    provenance: "New York",
    objects: "Various objects",
    inscription: "None",
    details: [
      {
        id: 1,
        title: "The Free Woman of Color",
        description: "The free women of color, richly dressed in straw hats and silks, occupy the center of the composition, asserting their social status distinct from that of their servants.",
        zoom: { x: 35, y: 45, scale: 2.1 }
      },
      {
        id: 2,
        title: "The Mother and Her Child",
        description: "On the left, an enslaved servant carries her child in her arms, a direct contrast to the freedom and elegance of the central women.",
        zoom: { x: 8, y: 52, scale: 2.3 }
      },
      {
        id: 3,
        title: "The Liveried Pages",
        description: "The children dressed in blue and gold livery, accompanied by lapdogs, evidence child domestic servitude in the colonial Caribbean.",
        zoom: { x: 85, y: 68, scale: 1.9 }
      }
    ]
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
