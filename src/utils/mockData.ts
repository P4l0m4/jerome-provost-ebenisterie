import placeholder1 from "@/assets/images/placeholder1.jpg";
import placeholder2 from "@/assets/images/placeholder2.jpg";
import placeholder3 from "@/assets/images/placeholder3.jpg";
import placeholder4 from "@/assets/images/placeholder4.jpg";

export const furniture = [
  {
    images: [
      placeholder1,
      placeholder1,
      placeholder1,
      placeholder1,
      placeholder1,
    ],
    name: "Cuisine 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Cuisine",
    isProfessional: true,
  },
  {
    images: [placeholder2, placeholder2, placeholder2, placeholder2],
    name: "Dressing 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Dressing",
    isProfessional: false,
  },
  {
    images: [
      placeholder3,
      placeholder3,
      placeholder3,
      placeholder3,
      placeholder3,
    ],
    name: "Salle de bain 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Salle de bain",
    isProfessional: false,
  },
  {
    images: [
      placeholder4,
      placeholder4,
      placeholder4,
      placeholder4,
      placeholder4,
    ],
    title: "Salle de bain 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Salle de bain",
    isProfessional: false,
  },
];

export const categories = [
  {
    title: "Cuisines sur-mesure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    category: "Cuisines",
    images: [placeholder1, placeholder1, placeholder1],
    link: "/cuisine-sur-mesure-savoie",
  },
  {
    title: "Dressings sur-mesure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    category: "Dressings",
    images: [placeholder2, placeholder2, placeholder2],
    link: "/dressings-sur-mesure-savoie",
  },
  {
    title: "Salles de bain sur-mesure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    category: "Salles de bain",
    images: [placeholder3, placeholder3, placeholder3],
    link: "/salle-de-bain-sur-mesure-savoie",
  },
  {
    title: "Bureaux et comptoirs sur-mesure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    category: "bureaux et comptoirs",
    images: [placeholder4, placeholder4, placeholder4],
    link: "/bureaux-et-comptoirs-sur-mesure",
  },
  {
    title: "Tables et tables basses sur-mesure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    category: "tables",
    images: [placeholder4, placeholder4, placeholder4],
    link: "/tables-et-tables-basses-sur-mesure",
  },
  {
    title: "Caves à vin sur-mesure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    category: "caves à vin",
    images: [placeholder4, placeholder4, placeholder4],
    link: "/cave-a-vin-sur-mesure",
  },
  {
    title: "Autres meubles sur-mesure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    category: "autres",
    images: [placeholder4, placeholder4, placeholder4],
    link: "/autres-meubles-sur-mesure",
  },
];
