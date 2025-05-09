<script setup lang="ts">
import { colors } from "@/utils/colors";
import marbre from "@/assets/images/partenaires/marbre.webp";

useHead({
  title:
    "Trouver un Ebeniste autour de moi | Obtenir un devis | JP Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Obtenez un devis pour votre meuble sur mesure. Jérôme Provost Ebénisterie, ébéniste agenceur à Chambéry en Savoie, réalise tous vos projets de meubles sur mesure.",
    },
  ],
});

const breadcrumbs = [
  {
    name: "Accueil",
    url: "/",
  },
  {
    name: "Contact",
    url: "/contact-ebeniste-savoie",
  },
];

const partners = [
  {
    name: "Marbrerie Portalier",
    link: "https://marbrerieportalier.com/",
    logoPath:
      "https://marbrerieportalier.com/wp-content/uploads/2024/10/marbrerie-portalier150.png",
    tags: ["Marbre"],
    imagePath: marbre,
  },

  {
    name: "Atelier d’Essence Agencement",
    link: "https://www.atelierdessence.com/",
    logoPath:
      "https://le-cdn.website-editor.net/s/0b2880bf24384c258a443836b12c9101/dms3rep/multi/opt/ATELIER-ESSENCE-Logo-460c93b7-339w.png?Expires=1746849606&Signature=l9OF0283QgkAULO9I6QQyYxd8u0XSdBUiD6weUjO-dfxJW6GAKBRlSr1F3Aa0QEpLrsuvndh8w4VzFNWw1BWcGIlX83PGlsN6VobHgHjeDrmQBPiOAOLk9SzQJUZ3Gv0q3KBQGqbULcFTkMXf5Sm8vqepCvvWJe6PUXC1XOJwKowswZsd86CDl0PswO-srORRbZwgOFnWLlXIw~8oTsZ1HxVh2UXWFglUV-pDWm~r62JrIjCdELH16gLbjWA3U-rtRTL8geBt6tUfjLym-KfVCBPFpfnGfjbQl9FGXOsZPw-41nyOqEOm1PUiyc5GslYG~LZ4r0Iqek7ObKv4aRlYA__&Key-Pair-Id=K2NXBXLF010TJW",
    tags: ["Ebénisterie", "Agencement"],
    imagePath:
      "https://le-cdn.website-editor.net/s/0b2880bf24384c258a443836b12c9101/dms3rep/multi/opt/IMG_0082-1920w.jpg?Expires=1747057275&Signature=XoVkDSodmZjXVbKDGtBKVF2Mids9R42dlBeq21HIPBdlffWwrLOHuBXx8VbFNepg6~MUJ2Ff90gHe0cugEEyTtrR6uT7zl~B08N4KiEyobC5kLpiPFOj3AF5Bvn1t6z7i9LPrK8bvc719A6yvEnrBFrsdBkcL9APCHwPtbtFb5vabkBE1Gae15uTtRzcDOQy5pVc0ZDWFhWIzErKsyxSDVp9dS9hSdHGSyH81F7tzi0uG33TOabv7Cg12fFT~VWFXZAlizi2wysDTwvU8NJTJMYTXqJBnDUaqR5wm4tBz2ZCzpMif3lgnkIYsjsNdEcudA8nQXHqx7ilOPLHwboyWQ__&Key-Pair-Id=K2NXBXLF010TJW",
  },
  {
    name: "CLS Chape Liquide Savoie",
    link: "https://chapeliquidesavoie.wixsite.com/info",
    logoPath:
      "https://static.wixstatic.com/media/c35561_4c15ee81e4124eb88e018e7c52ee9569~mv2_d_5294_1405_s_2.png/v1/fill/w_390,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c35561_4c15ee81e4124eb88e018e7c52ee9569~mv2_d_5294_1405_s_2.png",
    tags: ["chape liquide"],
    imagePath:
      "https://lh3.googleusercontent.com/p/AF1QipMY46M7nPQiKoonF7pNFufi8aKj9fsPpnnSAIA6=s1360-w1360-h1020",
  },

  {
    name: "Erick Charquet",
    link: "https://www.erickcharquet.com/",
    logoPath: "https://www.erickcharquet.com/sites/3744cw1021/files/logo.png",
    tags: ["Ferronnerie d’art"],
    imagePath:
      "https://www.erickcharquet.com/sites/3744cw1021/files/galeries/marquise-tonnelle-bourget-du-lac-erick-charquet-ferronnerie-dart-4.jpg",
    color: colors["nebulosity"],
  },
  {
    name: "Nau Courtier Conseil",
    link: "https://www.naucourtierconseil.fr/",
    logoPath:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAnFBMVEUyRlT///+6eEG0dkIlQ1UsRFTCi2DDfD+vdES8eD69f0psWU4sQVCAYUsjO0saNUY7TVpeVFBxWk1ES1OrckWYakcPL0EAKDz5+fplcHqlq7Da3N/x8vPFyMxcaHODi5J2gIeKZUpOXGiSaEmRmJ+4vMDO0dPk5ecUP1Z4Xk1ueIFWUVFlV08AGjIAIjicoqiibkYAEC0ABCgAACB3faDjAAAGj0lEQVRoge2aiXLiOBCGJWMv8UZIJgTfV4yxw5GQ7Lz/u223JJtLJoEatmar0lUBYaTP4ld3u6UK+cu6m/1N/rJGt5j19TCEu/YN9roYb77qMkK4Q643ezGefjHO/mPh2/vBX66DO8TTLa+7oP7kV/qSp6/Yk6vgztYafdh40bKe8d3ZgDs9yO9mo9GHI+drWRtHwx+vgT+51hhH2mNrpEiupa6QmavuZ89dd3oCZ1xw9h24u7AP4B8QZO5Ewq1BuJ/HWVwKA/4ULqkdnIwwhOf2EPwJGow1FC3N+ddwF6aj4c7GtTDIzXBHw1uqLTqjn8EtWNIO/uS6LyPLnZnhK4SLJe0t50z0xo1wYGm4vXDd7dxy0eOM8JVDuAYnOc69yHpbmuErp4M/w50mMHt7EM5yqXdTrLMI6c3+d3jn8AfUuJMFJCebMQo1CF8jJ9sl8IL3qXp2eA53Jw+Wu3mVcAe4z7YHdxvSfOKwnlY2Dcw9vzRzdwIyLDQcFXkFbcYzxwR/Ajjh2llKWNgmj/bLW/Bz+AuE4kjJYs8BuJiDuzwZ4Y8SXkjUGqhtQcM9W5wvKEwVVnHqSjiGkFxiiFozHK6IGBcyA3a1Ryv2OdyGVf3AQHVmyAWzrIcLcOIvaQ5OkiB7p/mFbwoigHvysQ3wLeSqzXSzhVvIOw3ACa+A3VRaHLRaGCMU4Cg1wiEluivbcVCnjRn+IuFEaD/E5WzgRrVvDn+AO9Oxgn8gVMXpyr4E5/UO3T3P0GHCft4muFpIWFBQ21OQ8dwE33Zwwt/BIVF4DNN+3mb4i8y8zmYzA1Uc2ZCyvGIpArmmhy80nLCyqSBIlxE9mLcR7swUfLrtTcKtOdhipMQ6hhMWgEcu18dsExwTFsoydjsDWUAO7Zjus+49PYATtk7j8kiTM/hYyghZw5Wa94YPo2d1s/FoZoITJqqTeZ/AZ/O50nOxmNjOy6I3fFjam0cQ6HFqd3XI5ghOWNUez/u0brH1SPl+UFEqkZV1I0/hEKunz7nbKy6Az+3LXX7gF+C2c73ZM4Bf7qJ2Fo+32Mp93l7usUW4Nb7JIKK+MLnhmtzHVjfv5r6z4bvZW75ht7viD/z/AGfC8zyOeZlzbMEuiskNKL7ILZXcMhBPGpbZHus+6g6cD8BVuY0ValdgMiiSE0F8mvos6r+MVWXVCGgVzE9Uzcw8+b7jZrif0gRrpoCwFIqnhrYC4T4JFDxNkpBywooEq8Nkxzt40iQN/EYaJklKK2aEAyMQUOH4xKPppwjSlB3B4+C9waqeibc0ZEL+BgnHLRaoQ5t3qDGiQTgnQsMDIk7hSy4kHH8j7kt6uMJ5SqhLcFYv+d3gcr3vBlf9THDQPDPCtYN+rfkFeJpl6C3n8OWykoPCLLvkLSiLGILj/rI2wWE7x3AQWjzg5xLOd5kY0jymy4AY4GXpKVlq2ryRQbjPA+mKYfrGfQVv3vmn1pyH+kefac6Y0rzdS34Gp7tdnUKEemFY1HWYSqeM45i2cubBji6FAZ5XFdwU4EGB2cII5zupGoznamMWi+7Qo2DSFf2Q5kzC6R7e9rmlEUECV4xwwqOiKEqZFcu6rkucBM+jKKrQ92PIYzm8wEVWFDiI5XUFm5YaDT7FJcgYD8EJ41wfhh200OStMQP3F3Uv3VXl6YMOBvhvtf8UznsxDtv6x+8vHzYZ2X95fL54+pirwe3WsiPzdtCWB3qsjGHZ1jGGOBHYRYWpF6PhAkMPmXJ2NR+Ea6eSPTx95AZDIRVmAlwSQ1x7ZsbRVZTjQlNkMnYguQRDcOidrMsC4x18jWZlueuGhkTDWRqu15EMIdW9lLfX8DAdhke08RmHaMTTAthV8kgGJAylha/gJE0DBkGu4JmvvPSbcEFYD+dsD0/eergPFxIN16H+fXglA/sYHlLSy1IJhln5JriubY7hMYXkhXCsWbK1z26FEwM8D1MFJ6JIQSQstBAe8N8A9zLaKjjjfpnQVrtimPDr4EKcw6u1fpSxKGJ7b7kabvSW/D1UcBKGggS9K/7jXyFL9hm89/C3IO/heDipXfHT/9XDA5Vb9vBfvu8b4YRQmqap9AEoeMO2TWXNinA8Epbh39K2bWmqFjRdLpfFYYRCeZr0z7mTx1yNR5qtfAarB13D1bwqJhIqU1SeYoFRnuWWXMHRTOeKSIRodnTexHaXZtH3mdMlV6Yz7EF+ZYcfBmT5vfYD/4H/UfB7HuZYD3cy+R8L9/t3iH8Bq1DhwVY7AgkAAAAASUVORK5CYII=",
    tags: ["Courtier"],
    imagePath:
      "https://www.naucourtierconseil.fr/landing_assurance_huac86d262d92e7fe7003783ca7f817762_836153_1200x0_resize_q75_box.jpg",
  },
  {
    name: "Eric Doro, Pathey architectes",
    link: "https://www.patey.fr/",
    logoPath:
      "https://www.patey.fr/wp-content/uploads/2023/01/cropped-patey-architectes-chambery.png",
    tags: ["Architecte"],
    imagePath:
      "https://www.patey.fr/wp-content/uploads/cache/2021/04/059-scaled/1314006747.jpg",
  },
  {
    name: "ASM serrurerie métallerie",
    link: "https://asm-chambery.com/",
    logoPath:
      "https://asm-chambery.com/wp-content/uploads/2017/06/V2-ASM-LOGO-900x210.png",
    tags: ["Serrurerie", "Métallerie"],
    imagePath:
      "http://asm-chambery.com/wp-content/uploads/2017/06/IMG_3126.jpg",
  },
  {
    name: "Hugo Reymond, LA’HO Architectes",
    link: "https://fr.linkedin.com/in/la-ho-architectes-hugo-reymond-23822a205",
    logoPath:
      "https://media.licdn.com/dms/image/v2/C4D03AQHgbPlC_BeNUg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1641456010385?e=1750291200&v=beta&t=xNaWWaFnKms8wW1aLlEM-HmP9u33xfiXfQ3mNjmHxfk",
    tags: ["Architecte"],
    imagePath:
      "https://media.licdn.com/dms/image/v2/C4E22AQG9HtiQ4z_DRQ/feedshare-shrink_800/feedshare-shrink_800/0/1659273622138?e=2147483647&v=beta&t=jeS3GmRAqWV4hj3OYbCvlccM1UOIKWb8TUaLie1OJmg",
  },
  {
    name: "Etablissements Riera",
    link: "https://g.co/kgs/4VNWfWk",
    logoPath: "",
    tags: ["Peintre en bâtiment"],
    imagePath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRep59uxVzjGpUbSVlfGNO1wrrF7zH5NyEQaUTYCsZ7erFZOiQCQTf7QcdY-mExGcJHTw&usqp=CAU",
  },
  {
    name: "Mahmoud Achouri",
    link: "https://g.co/kgs/DeDwhmZ",
    logoPath: "",
    tags: ["Couvreur charpentier"],
    imagePath: "https://toiture.pro/lexique/dictionnaire-lexique.jpg",
  },
  {
    name: "B2Ms Intérieurs",
    link: "https://g.co/kgs/VefSkjY",
    logoPath: "",
    tags: ["Placo", "Second œuvre", "Coordination", "Binôme"],
    imagePath:
      "https://www.megastructures.fr/wp-content/uploads/2020/10/second-oeuvre.jpg",
  },
  {
    name: "Alpes Savoie Electricité",
    link: "https://www.facebook.com/profile.php?id=61573522184020&amp;locale=fr_FR",
    logoPath: "",
    tags: ["Electricité"],
    imagePath:
      "https://f.maformation.fr/edito/sites/3/2021/11/apprendre-electricite.jpeg",
  },
  {
    name: "C2E courant eau electricité",
    link: "https://www.meilleur-artisan.com/entreprise.courant-eau-electricite-c2e.890666.html",
    logoPath: "",
    tags: ["Installation", "Electricité", "Gaz", "Eau"],
    imagePath:
      "https://cdn.hellowatt.fr/media/solution/images/intro_installation_chauffe-eau_gaz.jpg",
  },
];
</script>
<template>
  <picture class="contact-banner">
    <source
      media="(min-width: 1100px)"
      srcset="@/assets/images/jp-banner.webp"
      type="image/webp"
    />

    <source
      media="(min-width: 780px)"
      srcset="@/assets/images/jp-banner-tablet.webp"
      type="image/webp"
    />

    <JsonldBreadcrumbs
      :links="breadcrumbs"
      :color="colors['cannoli-cream-darker']"
      class="breadcrumbs"
    />

    <div class="contact-banner__txt">
      <SideText variant="light" side="top">
        Jérôme Provost
        <template #subtitle>Ebéniste agenceur en Savoie</template>
      </SideText>
      <div class="contact-banner__txt__info">
        <a class="contact-banner__txt__info__element" href="tel:0623041637">
          <IconComponent
            icon="phone"
            size="2rem"
            :color="colors['lucent-white']"
          />06 23 04 16 37
        </a>
        <a
          class="contact-banner__txt__info__element"
          href="mailto:jp.ebenisterie73@gmail.com"
        >
          <IconComponent
            icon="envelope-1"
            size="2rem"
            :color="colors['lucent-white']"
          />jp.ebenisterie73@gmail.com
        </a>
      </div>
    </div>
    <FormComponent />

    <img
      src="@/assets/images/jp-banner-mobile.webp"
      alt="contact ebenisterie chambery"
    />
  </picture>
  <section id="partenaires" class="partners">
    <SideText variant="light" side="top">
      Partenaires
      <template #subtitle>Tous les fournisseurs et partenaires</template>
    </SideText>
    <div class="grid"><PartnersCard :partners /></div>
  </section>
  <KnowHow />
  <InfoBanner />
  <FAQ />
  <ProvostTitle />
  <CarouselComponent />
</template>
<style lang="scss" scoped>
.contact-banner {
  display: flex;
  justify-content: end;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  width: 100%;
  gap: 2rem;
  padding: 2rem 1rem;
  position: relative;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
  }

  @media (min-width: $laptop-screen) {
    padding: 4rem;
  }

  & source {
    display: none;
  }

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 70%;
    z-index: -1;
    filter: brightness(0.8);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg, $text-color, transparent 60%);
    z-index: -1;
  }

  &__txt {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: $big-tablet-screen) {
      gap: 4rem;
    }

    &__info {
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      width: fit-content;

      @media (min-width: $big-tablet-screen) {
        flex-direction: row;
        gap: 2rem;
      }

      &__element {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-size: $main-text-size;
        font-weight: $regular;
        color: $text-color-alt;
        width: fit-content;
        text-shadow: $shadow-text;

        @media (min-width: $big-tablet-screen) {
          font-size: $medium-text-size;
        }
      }
    }
  }

  & .wrapper {
    &:deep(.line) {
      max-width: 300px;
    }
    @media (min-width: $big-tablet-screen) {
      &:deep(.line) {
        max-width: 420px;
      }
    }
  }
}

.breadcrumbs {
  padding: 0 !important;
}

.partners {
  width: 100%;
  min-height: 100vh;
  background-color: $text-color;
  display: flex;
  gap: 2rem;
  padding: 2rem 1rem;
  flex-direction: column;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem;
    gap: 4rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
    column-gap: 2rem;
    row-gap: 4rem;

    @media (min-width: $tablet-screen) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

    @media (min-width: $big-tablet-screen) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }

  & .wrapper {
    &:deep(.line) {
      max-width: 260px;
    }
    @media (min-width: $big-tablet-screen) {
      &:deep(.line) {
        max-width: 350px;
      }
    }
  }
}
</style>
