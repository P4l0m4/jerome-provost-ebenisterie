<script setup>
import { colors } from "@/utils/colors";

const faq = [
  {
    title: "Quels sont les avantages des meubles sur mesure ?",
    answer:
      "Nous acceptons les paiements par carte bancaire, virement et chèque.",
  },
  {
    title: "Pourquoi choisir un ébéniste agençeur à Chambéry ?",
    answer: "Les délais de livraison sont de 3 à 5 jours ouvrés.",
  },
  {
    title: "Comment se déroule la réalisation d’un meuble sur mesure ?",
    answer:
      "Nous acceptons les paiements par carte bancaire, virement et chèque.",
  },
  {
    title: "Quels sont vos délais de réalisation ?",
    answer: "Vous pouvez suivre votre commande sur le site du transporteur.",
  },
  {
    title: "Comment obtenir un devis pour un meuble sur mesure ?",
    answer: "Pour retourner un article, veuillez nous contacter par mail.",
  },
  {
    title: "Quelles sont vos garanties et conditions après-vente ?",
    answer:
      "Nous acceptons les paiements par carte bancaire, virement et chèque.",
  },
  {
    title: "Quels sont vos tarifs pour un projet sur mesure ?",
    answer:
      "Nous acceptons les paiements par carte bancaire, virement et chèque.",
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
  <section class="faq">
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
