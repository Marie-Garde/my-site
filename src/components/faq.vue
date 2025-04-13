<script setup lang="ts">
import AccordionItem from './Accordion.vue';
import Title from './Title.vue';
</script>

<template>
  <div class="container">
    <div class="content">
      <Title title="FAQ" id="faq" color="black" />

      <AccordionItem title="Pourquoi choisir une freelance ?">
        <p class="text-top">
          Avec une freelance vous bénéficiez d’un contact unique et direct avec la personne qui crée
          votre site, favorisant une meilleure communication et une compréhension plus précise de
          vos attentes. Là où une société de service a généralement plus d'inertie et de procédures,
          une freelance sera plus adaptable et réactives à vos demandes.
        </p>
        <p class="text-bottom">
          Une freelance a dû développer des
          <strong>compétences transverses et une curiosité</strong> qui vous garantira un service
          aux petits oignons.
        </p>
        <p>
          Ainsi, en choisissant un partenariat avec une freelance, vous pouvez vous concentrer sur
          <strong>ce qui compte vraiment dans votre activités !</strong>
        </p>
      </AccordionItem>

      <AccordionItem title="Combien coûte un outil numérique ?">
        <p class="text-top">
          Quel que soit l'outil numérique dont vous avez besoin (outil interne, site interne,
          plateforme de e-commerce, ...), plus le projet sera complexe, plus le tarif sera
          important.
        </p>
        <p class="text-bottom">
          Egalement, plus il y aura de pages différentes ou plus il prendra de temps à développer,
          plus il sera important également.
        </p>
        <p class="text-top">Voici quelques fourchettes d'ordre de prix :</p>
        <p class="text-top text-bottom">
          <strong>Site vitrine :</strong> entre 1 500 et 10 000 euros.
        </p>
        <p class="text-bottom"><strong>Site e-commerce :</strong> entre 2 500 et 18 000 euros.</p>
        <p><strong>Contactez moi pour avoir votre devis personnalisé.</strong></p>
      </AccordionItem>

      <AccordionItem title="Avec quels outils travailles-tu ?">
        <p>
          En développement web, mon expertise principale se situe en javascript, avec des langages
          comme VueJs, Angular, NodeJs, NestJs... Agrémenté le plus souvent de TypeScript.
        </p>
        <p>
          Pour connecter des bases de données et fournir des solutions numériques complètes,
          j'utilise aussi GraphQL, ExpressJs, mySQL, MongoDB, Pinia, des bibliothèques CSS comme
          Boostrap et Tailwind...
        </p>
        <p>
          En maquettage j'utilise principalement figma, ainsi que CANVA pour les icons et visuels.
        </p>
      </AccordionItem>

      <AccordionItem title="Mon site sera t-il référencé sur Google ?">
        <p class="text-top">
          Oui, bien sûr ! Le référencement naturel (SEO) fait partie intégrante du développement de
          votre site. Je travaille sur la structure, la rapidité et l’optimisation technique pour
          que votre site soit bien indexé par Google.
        </p>
        <p class="text-bottom">
          Si vous avez déjà un ancien site, nous pouvons l’utiliser pour conserver l’historique et
          les connexions déjà établies avec Google, ce qui peut accélérer le processus.
        </p>
        <p>
          Et si vous souhaitez aller plus loin, je peux également vous accompagner sur le
          référencement payant (SEA), pour booster rapidement votre présence en ligne.
        </p>
        <p>
          En général, il faut compter <strong>environ 3 mois</strong> pour commencer à voir des
          résultats en termes de visibilité sur les moteurs de recherche.
        </p>
      </AccordionItem>

      <AccordionItem title="Pourrai-je modifier mon site moi-même ?">
        <p class="text-top">
          Oui, dans une certaine mesure. Je travaille avec des outils qui vous permettent de gérer
          facilement des portions de votre site, comme des articles, des photos, que nous devrons
          décider ensemble à la co-conception.Si votre projet nécessite une base de données, elle
          sera également mise à votre disposition avec une interface adaptée pour que vous puissiez
          y accéder et la gérer simplement.
        </p>
        <p>
          L’objectif est que vous soyez autonome sur les éléments que vous souhaitez pouvoir
          modifier, sans avoir besoin de passer par moi à chaque fois (même si je reste dispo en cas
          de besoin !).
        </p>
        <p>
          En revanche, si vous souhaitez modifier des éléments plus structurants du site (comme
          l’architecture, des fonctionnalités ou la mise en page globale), il faudra passer par moi.
          Ce type de changement demande une intervention plus technique pour garantir la stabilité
          et les performances du site.
        </p>
      </AccordionItem>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;
.container {
  background-color: $grey-soft;
  display: flex;
  justify-content: center;
  padding-bottom: 60px;

  .content {
    width: 60%;
    @media (max-width: 768px) {
      width: 90%;
    }

    .text-top {
      margin-bottom: 0;
    }

    .text-bottom {
      margin-top: 0;
    }
  }
}
</style>
