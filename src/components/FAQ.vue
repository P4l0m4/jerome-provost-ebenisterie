<script setup>
import { colors } from "@/utils/colors";

const faq = [
  {
    title: "Quels sont les avantages des meubles sur mesure ?",
    answer:
      "Les meubles sur mesure s’intègrent parfaitement a votre espace et répondent au mieux à vos attentes en termes de design et de qualité.",
  },
  {
    title: "Pourquoi choisir un ébéniste agençeur ?",
    answer:
      "En tant qu'Ebéniste, je possède une minutie et une créativité accrues ainsi que des compétences complémentaires (sculpture, marqueterie, etc). Je maitrise également les outils de productions très spécifiques et variés et saurait même imaginer les méthodologies de production utiles pour des projets hors norme.",
  },
  {
    title: "Comment se déroule la réalisation d’un meuble sur mesure ?",
    answer:
      "Tout commence par un échange de vive voix. Pendant cet échange, je réalise des croquis à main levée, prends des dimentions et tente de cerner au mieux la vision du client. Je m’atèle ensuite a dessiner et à chiffrer le projet. Si le client valide le devis, je repasse pour une prise de cote précise avant la réalisation en atelier. Vient ensuite la livraison, toujours dans les délais indiqué sur le devis. Une fois la pose terminée, si le client est satisfait, je lui transmet une facture.",
  },
  {
    title: "Quels sont vos délais de réalisation ?",
    answer:
      "Je mets un point d’honneur à vous délivrer un devis le plus rapidement possible, soit une semaine environ, quinze jours si nécessaires ( dans le cas d’un accroissement de travail, ou d’un devis nécessitant plus de temps). Pour ce qui est des réalisations, j’essaie de vous livrer vos aménagements sous 4 à 6 mois.",
  },
  {
    title: "Comment obtenir un devis pour un meuble sur mesure ?",
    answer:
      "Rien de plus simple, me contacter par téléphone au 06 23 04 16 37, ou par mail à l’adresse jp.ebenisterie73@gmail.com. Vous pouvez également faire une demande devis directement sur le site depuis le formulaire de contact.",
  },
  {
    title: "Quelles sont vos garanties et conditions après-vente ?",
    answer:
      "Ma meilleure publicité étant le bouche à oreille, je m’efforce de vous satisfaire. Je fais donc toujours en sorte que le produit que je vous vends corresponde à vos attentes. Si besoin, j’interviens sans soucis à la suite des travaux pour affiner votre demande.",
  },
  {
    title: "Quels sont vos tarifs pour un projet sur mesure ?",
    answer:
      "Il est certain que les meubles sur mesure ont un coût. Tout comme mes outils de production, les matériaux de qualité, mes compétences et mon temps. Je m’engage, pour autant, à toujours essayer de vous proposer le meilleur tarif relatif à votre projet. Chaque projet étant unique, je vous invte à contacter pour un devis personnalisé.",
  },
];

const questions = faq.map((question) => {
  return {
    "@type": "Question",
    name: question.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: question.answer,
    },
  };
});
useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [questions],
}));

const questionOpened = ref("");
function toggleQuestion(index) {
  if (questionOpened.value === index) {
    questionOpened.value = "";
  } else {
    questionOpened.value = index;
  }
}
</script>
<template>
  <section id="faq" class="faq">
    <span class="faq__title">Foire aux questions</span>

    <div class="faq__cards">
      <div
        class="faq__cards__card"
        v-for="(question, index) in faq"
        :key="index"
        @click="toggleQuestion(index)"
      >
        <h2 class="faq__cards__card__question">
          <span class="icon"
            ><IconComponent
              :icon="questionOpened === index ? 'xx' : 'plus'"
              size="1rem"
              :color="colors['lucent-white']"
          /></span>
          {{ question.title }}
        </h2>
        <p class="faq__cards__card__answer" v-if="questionOpened === index">
          {{ question.answer }}
        </p>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.faq {
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  gap: 1rem;
  background-color: $base-color-darker;

  @media (min-width: $big-tablet-screen) {
    padding: 8rem 4rem;
    gap: 2rem;
  }

  &__title {
    font-size: 2rem;
    font-weight: $bold;
    width: fit-content;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: $tertiary-color;
      margin-top: 1rem;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    width: 100%;

    @media (min-width: $big-tablet-screen) {
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }

    @media (min-width: $super-big-screen) {
      grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    }

    &__card {
      background-color: $base-color;
      border-radius: 0 65px 0 0;
      box-shadow: $shadow;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
      padding: 1rem;
      gap: 1rem;
      cursor: pointer;
      height: fit-content;
      padding-top: 2rem;

      @media (min-width: $big-tablet-screen) {
        height: 100%;
        padding: 2rem;
      }

      &__question {
        display: flex;
        justify-content: space-between;
        //   align-items: end;
        width: 100%;
        font-size: $big-text-size;
        font-weight: $bold;
        align-self: stretch;
        flex-direction: column;

        gap: 1rem;

        @media (min-width: $big-tablet-screen) {
          gap: 2rem;
        }

        .icon {
          width: 40px;
          height: 40px;
          background-color: $tertiary-color;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2rem 2rem 2rem 0;
          margin-left: auto;
        }
      }

      &__answer {
        font-size: 1rem;
        font-weight: $regular;
        animation: fading 0.4s;
        width: 100%;
        line-height: 1.2rem;
      }

      &__link {
        animation: fading 0.4s;
        width: fit-content;
      }
    }
  }
}
</style>
