import placeholder1 from "@/assets/images/placeholder1.jpg";
import placeholder2 from "@/assets/images/placeholder2.jpg";
import placeholder3 from "@/assets/images/placeholder3.jpg";
import placeholder4 from "@/assets/images/placeholder4.jpg";

import cuisine1 from "@/assets/images/cuisines/cuisine-sur-mesure-1.webp";
import cuisine2 from "@/assets/images/cuisines/cuisine-sur-mesure-2.webp";
import cuisine3 from "@/assets/images/cuisines/cuisine-sur-mesure-3.webp";

import dressing1 from "@/assets/images/dressings/dressings-sur-mesure-1.webp";
import dressing2 from "@/assets/images/dressings/dressings-sur-mesure-2.webp";
import dressing3 from "@/assets/images/dressings/dressings-sur-mesure-3.webp";

import salleDeBain1 from "@/assets/images/salles-de-bain/salle-de-bain-sur-mesure-1.webp";
import salleDeBain2 from "@/assets/images/salles-de-bain/salle-de-bain-sur-mesure-2.webp";
import salleDeBain3 from "@/assets/images/salles-de-bain/salle-de-bain-sur-mesure-3.webp";

import bureau1 from "@/assets/images/bureaux-et-comptoirs/bureau-sur-mesure-1.webp";
import bureau2 from "@/assets/images/bureaux-et-comptoirs/bureau-sur-mesure.webp";
import comptoir1 from "@/assets/images/bureaux-et-comptoirs/comptoir-sur-mesure-1.webp";

import cave1 from "@/assets/images/caves-a-vin/cave-a-vin-sur-mesure-1.webp";
import cave2 from "@/assets/images/caves-a-vin/cave-a-vin-sur-mesure-2.webp";
import cave3 from "@/assets/images/caves-a-vin/cave-a-vin-sur-mesure-3.webp";

import table1 from "@/assets/images/tables-et-tables-basses/table-sur-mesure-1.webp";
import table2 from "@/assets/images/tables-et-tables-basses/table-sur-mesure-2.webp";
import table3 from "@/assets/images/tables-et-tables-basses/table-sur-mesure-3.webp";

import meubleTele1 from "@/assets/images/autres-meubles/meuble-tele-sur-mesure-1.webp";
import claustra1 from "@/assets/images/autres-meubles/claustra-sur-mesure-1.webp";
import cheminee1 from "@/assets/images/autres-meubles/coin-cheminee-sur-mesure-1.webp";

import salon1 from "@/assets/images/salons/salon-sur-mesure-1.webp";
import salon2 from "@/assets/images/salons/salon-sur-mesure-2.webp";
import salon3 from "@/assets/images/salons/salle-a-manger-sur-mesure-1.webp";

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
    title: "Cuisines sur mesure",
    description:
      "Toutes nos créations de cuisines sur mesure, cuisines en bois, cuisines avec un plan de travail en marbre, cuisines modernes, etc.",
    category: "Cuisines",
    images: [cuisine3, cuisine2, cuisine1],
    link: "/cuisine-sur-mesure-savoie",
  },
  {
    title: "Dressings sur mesure",
    description:
      "Toutes nos créations de dressings sur mesure, dressings en bois, dressings modernes, rangements sur mesure, etc.",
    category: "Dressings",
    images: [dressing3, dressing2, dressing1],
    link: "/dressings-sur-mesure-savoie",
  },
  {
    title: "Salles de bain sur mesure",
    description:
      "Toutes nos créations de salles de bain sur mesure, salles de bain modernes, salles de bain avec vasque, salles de bain avec douche, salles de bain avec baignoire, etc.",
    category: "Salles de bain",
    images: [salleDeBain1, salleDeBain2, salleDeBain3],
    link: "/salle-de-bain-sur-mesure-savoie",
  },
  {
    title: "Bureaux et comptoirs sur mesure",
    description:
      "Toutes nos créations de bureaux et comptoirs sur mesure, bureaux en bois, comptoirs en marbre, comptoirs de magasin,comptoirs modernes, etc.",
    category: "bureaux et comptoirs",
    images: [bureau1, comptoir1, bureau2],
    link: "/bureaux-et-comptoirs-sur-mesure",
  },
  {
    title: "Tables et tables basses sur mesure",
    description:
      "Toutes nos créations de tables et tables basses sur mesure, tables en bois, tables en marbre, tables de magassalle à manger, tables industrielles, etc.",
    category: "tables",
    images: [table1, table3, table2],
    link: "/tables-et-tables-basses-sur-mesure",
  },
  {
    title: "Caves à vin sur mesure",
    description:
      "Toutes nos créations de caves à vin sur mesure, caves à vin en bois, caves à vin modernes, caves à vin avec rangements, caves à vin avec bar, etc.",
    category: "caves à vin",
    images: [cave3, cave1, cave2],
    link: "/cave-a-vin-sur-mesure",
  },
  {
    title: "Salons et salles à manger sur mesure",
    description:
      "Toutes nos créations de salons et salles à manger sur mesure, salons et salles à manger en bois, salons et salles à manger haut de gamme.",
    category: "salons et salles à manger",
    images: [salon1, salon2, salon3],
    link: "/salons-et-salles-a-manger-sur-mesure",
  },
  {
    title: "Autres meubles sur mesure",
    description:
      "Toutes nos créations de meubles sur mesure originaux, meubles et agencements uniques pour votre intérieur.",
    category: "autres",
    images: [meubleTele1, cheminee1, claustra1],
    link: "/autres-meubles-sur-mesure",
  },
];
