export type ContentLocale = "id" | "en";

export type LocalizedText = Record<ContentLocale, string>;

export function getLocalizedText(
  text: LocalizedText,
  language: string | undefined,
): string {
  return language?.startsWith("en") ? text.en : text.id;
}

export type SpaceKey = "build" | "automate" | "create" | "explore" | "improve";

export const spaces: SpaceKey[] = [
  "build",
  "automate",
  "create",
  "explore",
  "improve",
];

export type CreationType =
  | "client-project"
  | "internal-project"
  | "experiment"
  | "prototype"
  | "concept";

export type CreationVisualVariant =
  | "modules"
  | "windows"
  | "flow"
  | "loop"
  | "layers"
  | "composition"
  | "orbit"
  | "radar"
  | "progress"
  | "refine";

export type Creation = {
  id: string;
  title: LocalizedText;
  category: SpaceKey;
  type: CreationType;
  background: LocalizedText;
  solution: LocalizedText;
  technologies: LocalizedText[];
  visualVariant: CreationVisualVariant;
};

export const creationTypeLabels: Record<CreationType, LocalizedText> = {
  "client-project": {
    id: "Proyek Klien",
    en: "Client Project",
  },
  "internal-project": {
    id: "Proyek Internal",
    en: "Internal Project",
  },
  experiment: {
    id: "Eksperimen",
    en: "Experiment",
  },
  prototype: {
    id: "Prototipe",
    en: "Prototype",
  },
  concept: {
    id: "Konsep",
    en: "Concept",
  },
};

export const creationsPageDescription: LocalizedText = {
  id: "Berbagai sistem, otomasi, produk digital, dan eksperimen yang dikembangkan di Pangkreas.",
  en: "Systems, automations, digital products, and experiments developed at Pangkreas.",
};

// Until supporting case-study material is verified, these entries are presented
// as concepts, prototypes, or experiments rather than completed client work.
export const creations: Creation[] = [
  {
    id: "inventory-system",
    title: {
      id: "Sistem Manajemen Inventaris",
      en: "Inventory Management System",
    },
    category: "build",
    type: "prototype",
    background: {
      id: "Pencatatan stok dan pembelian tersebar di beberapa tempat.",
      en: "Stock and purchasing records are spread across several places.",
    },
    solution: {
      id: "Sistem terpusat untuk mengelola stok, pemasok, dan alur pembelian.",
      en: "A centralized system for managing stock, suppliers, and purchasing workflows.",
    },
    technologies: [
      { id: "React", en: "React" },
      { id: "Laravel", en: "Laravel" },
      { id: "MySQL", en: "MySQL" },
    ],
    visualVariant: "modules",
  },
  {
    id: "marketplace-workflow",
    title: {
      id: "Alur Kerja Marketplace",
      en: "Marketplace Workflow",
    },
    category: "automate",
    type: "concept",
    background: {
      id: "Pemantauan produk dan pemrosesan pesanan membutuhkan banyak langkah berulang.",
      en: "Product monitoring and order processing involve many repetitive steps.",
    },
    solution: {
      id: "Alur kerja terpadu untuk membantu memantau produk dan memproses pesanan.",
      en: "An integrated workflow for monitoring products and processing orders.",
    },
    technologies: [
      { id: "Python", en: "Python" },
      { id: "API", en: "API" },
    ],
    visualVariant: "flow",
  },
  {
    id: "sales-dashboard",
    title: {
      id: "Dasbor Penjualan & CRM",
      en: "Sales & CRM Dashboard",
    },
    category: "improve",
    type: "prototype",
    background: {
      id: "Informasi prospek dan performa penjualan sulit dilihat dalam satu tempat.",
      en: "Lead information and sales performance are difficult to view in one place.",
    },
    solution: {
      id: "Dasbor ringkas untuk mengelola pipeline dan memantau aktivitas penjualan.",
      en: "A focused dashboard for managing the pipeline and monitoring sales activity.",
    },
    technologies: [
      { id: "React", en: "React" },
      { id: "Node.js", en: "Node.js" },
    ],
    visualVariant: "progress",
  },
  {
    id: "creative-lab",
    title: {
      id: "Laboratorium Teknologi Kreatif",
      en: "Creative Technology Lab",
    },
    category: "explore",
    type: "experiment",
    background: {
      id: "Ide baru perlu diuji sebelum dikembangkan lebih jauh.",
      en: "New ideas need to be tested before they are developed further.",
    },
    solution: {
      id: "Ruang eksperimen untuk menguji konsep, interaksi, dan teknologi secara bertahap.",
      en: "An experimental space for testing concepts, interactions, and technology in stages.",
    },
    technologies: [
      { id: "Prototipe", en: "Prototype" },
      { id: "Riset", en: "Research" },
    ],
    visualVariant: "orbit",
  },
];
