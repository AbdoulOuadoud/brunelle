/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Cosplay images
import imgYumeko from './assets/cosplays/Yumeko-Jabami.jpg';
import imgMisa from './assets/cosplays/Misa-Amane.jpg';
import imgCalliope from './assets/cosplays/Calliope.jpg';
import imgKanaria from './assets/cosplays/Kanaria.jpg';
import imgMima from './assets/cosplays/Mima-Kirigoe.jpg';
import imgToph from './assets/cosplays/Toph-Beifong.jpg';
import imgChoso from './assets/cosplays/Choso.jpg';
import imgNami from './assets/cosplays/Nami.jpg';
import imgKimberly from './assets/cosplays/Kimberly.jpg';
import imgYoriichi from './assets/cosplays/Yoriichi-Tsugikuni.jpg';

// Hero images
import hero1 from './assets/hero/hero-1.jpg';
import hero2 from './assets/hero/hero-2.jpg';
import hero3 from './assets/hero/hero-3.jpg';
import hero4 from './assets/hero/hero-4.jpg';
import hero5 from './assets/hero/hero-5.jpg';

// Event images
import imgAfrotaku from './assets/events/Otaku RDV - AfrOtaku.jpg';
import imgSubarachill from './assets/events/Subarachill 2025.jpg';
import imgOtakuMangaContext from './assets/events/Otaku RDV - Manga Contexte.jpg';
import imgHallowen from './assets/events/Hallowen.png';
import imgVelo from './assets/events/Vélo.jpg';

// --- Types ---

export interface CosplayItem {
  id: number;
  name: string;
  source: string;
  description: string;
  image: string;
}

export interface EventItem {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  image: string;
  registrationOpen?: boolean;
  personal?: boolean;
}

// --- Data ---

export const HERO_IMAGES = [hero1, hero2, hero3, hero4, hero5];

export { imgHallowen };

export const COSPLAYS: CosplayItem[] = [
  {
    id: 1,
    name: "Yumeko Jabami",
    source: "Kakegurui",
    description: "Protagoniste de l'Académie privée Hyakkaou, Yumeko est fascinée par l'excitation du jeu et la psychologie des autres joueurs. Mon cosplay reflète son audace et son intelligence, tout en y apportant ma touche personnelle.",
    image: imgYumeko
  },
  {
    id: 2,
    name: "Misa Amane",
    source: "Death Note",
    description: "Idole, mannequin et chanteuse, Misa devient le « Second Kira ». Mon interprétation met en avant son côté charismatique et sa personnalité lumineuse, avec une attention particulière aux détails gothiques de son style.",
    image: imgMisa
  },
  {
    id: 3,
    name: "Calliope",
    source: "Hercule (Disney)",
    description: "Muse de la poésie épique, chef du groupe des cinq Muses. Mon cosplay illustre sa prestance et son énergie, tout en ajoutant ma touche créative sur les accessoires et la mise en scène.",
    image: imgCalliope
  },
  {
    id: 4,
    name: "Kanaria",
    source: "Hunter X Hunter",
    description: "Apprentie majordome de la famille Zoldyck et gardienne loyale, mon cosplay reflète la discipline et la loyauté du personnage tout en gardant ma propre expressivité.",
    image: imgKanaria
  },
  {
    id: 5,
    name: "Mima Kirigoe",
    source: "Perfect Blue",
    description: "Personnage principal de l'anime psychologique Perfect Blue. Mon cosplay capture la dualité entre innocence et tension dramatique du personnage.",
    image: imgMima
  },
  {
    id: 6,
    name: "Toph Beifong",
    source: "Avatar : Le Dernier Maître de l'Air",
    description: "Maîtresse de la terre aveugle, mon cosplay illustre sa force et son indépendance, avec des accessoires et postures fidèles à son univers.",
    image: imgToph
  },
  {
    id: 7,
    name: "Choso",
    source: "Jujutsu Kaisen",
    description: "Fœtus des Neuf Phases et allié stratégique, ce cosplay met en avant sa puissance et sa complexité, tout en incorporant ma propre identité.",
    image: imgChoso
  },
  {
    id: 8,
    name: "Nami",
    source: "One Piece",
    description: "Navigatrice experte en météorologie, mon cosplay combine l'aspect pratique de son personnage et ma touche créative personnelle pour rendre la tenue unique.",
    image: imgNami
  },
  {
    id: 9,
    name: "Kimberly",
    source: "Street Fighter 6",
    description: "Nouvelle combattante afro-américaine prodige, élève du ninja Guy, qui combine des attaques rapides et une grande mobilité pour déconcerter ses adversaires, utilisant des bombes de peinture et l'art de la tromperie pour ouvrir leur garde. Mon cosplay combine sa personnalité pleine d'énergie et notre passion pour l'art.",
    image: imgKimberly
  },
  {
    id: 10,
    name: "Yoriichi Tsugikuni",
    source: "Kimetsu no Yaiba",
    description: "Pourfendeur de démons légendaire, mon cosplay illustre son talent exceptionnel et sa maîtrise du sabre, tout en ajoutant des éléments créatifs pour refléter ma personnalité.",
    image: imgYoriichi
  }
];

export const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Otaku RDV - Manga Contexte",
    category: "Culture & Art",
    description: "Organisé sur le campus, avec un défilé de cosplays exclusif et des chorégraphies dont j'ai été la directrice artistique.",
    fullDescription: "Organisé sur le campus, avec un défilé de cosplays exclusif et des chorégraphies dont j'ai été la directrice artistique. Des personnages tels que Luffy, Yor Forger, Robin, Mami Tsunade et Toph Beifong ont été mis en avant. L'événement a rassemblé une centaine de passionnés, qui ont apprécié le défilé et les moments conviviaux.",
    highlights: ["100+ Passionnés", "Cosplay Parade", "Artistic Direction"],
    image: imgOtakuMangaContext,
    registrationOpen: false
  },
  {
    id: 2,
    title: "Otaku RDV - AfrOtaku",
    category: "Fusion Culturelle",
    description: "Une fusion entre cultures japonaise et africaine à travers un défilé thématique mettant en valeur des pagnes et accessoires africains.",
    fullDescription: "Cette édition visait à combiner les cultures japonaise et africaine à travers un défilé thématique, mettant en valeur des pagnes et accessoires africains sur des modèles japonais. Les tenues, chorégraphies et décorations ont été soigneusement choisis pour illustrer cette fusion culturelle. Plus de 100 passionnés ont participé à l'événement.",
    highlights: ["Cultural Fusion", "African Fabrics", "Unique Choreography"],
    image: imgAfrotaku,
    registrationOpen: false
  },
  {
    id: 3,
    title: "Subarachill 2025",
    category: "Grand Événement",
    description: "L'un des plus grands rassemblements d'otakus au Bénin, où j'ai dirigé le défilé thématique combinant comédie musicale et narration.",
    fullDescription: "J'ai participé à Subarachill 2025, l'un des plus grands rassemblements d'otakus au Bénin, en dirigeant le défilé thématique, qui combinait comédie musicale et narration. Un moment fort de la scène otaku béninoise.",
    highlights: ["Musical Comedy", "Storytelling", "Major Gathering"],
    image: imgSubarachill,
    registrationOpen: false
  },
  {
    id: 4,
    title: "Soirées Halloween",
    category: "Événement Personnel",
    description: "Organisation d'Halloween 2024 et 2025 en comité restreint avec déguisements et ambiance immersive, ainsi que des soirées jeux de société.",
    fullDescription: "À titre personnel, j'ai organisé Halloween en 2024 et 2025 (2 éditions) en comité restreint avec des déguisements et une ambiance immersive, ainsi que de petites soirées jeux de société pour des communautés plus intimes. Ces moments permettent de renforcer les liens entre passionnés dans un cadre chaleureux et convivial.",
    highlights: ["2 Éditions", "Halloween", "Jeux de Société", "Comité Restreint"],
    image: imgHallowen,
    registrationOpen: false,
    personal: true
  },
  {
    id: 5,
    title: "Sortie Vélo Cotonou – Ouidah",
    category: "Aventure & Sport",
    description: "Road trip sportif et humain réalisé à 2 reprises, combinant effort physique, découverte culturelle et partage entre passionnés.",
    fullDescription: "Dans une volonté de pousser les individus à sortir de leur zone de confort, nous avons réalisé à deux reprises le trajet Cotonou – Ouidah à vélo (2 éditions). Une expérience à la fois sportive, humaine et enrichissante, mêlant effort physique, découverte du patrimoine et moments de partage inoubliables entre participants.",
    highlights: ["2 Éditions", "40+ km", "Sportif", "Découverte"],
    image: imgVelo,
    registrationOpen: false,
    personal: true
  }
];
