<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: "L'envolée numérique | Mentions légales",
  meta: [
    {
      name: 'description',
      content: "Faites décoller votre présence en ligne par la création d'un site personnalisé.",
    },
    {
      name: 'keywords',
      content:
        'développement web, solution numérique, site web, Marie Garde, création de sites web',
    },
    { property: 'og:title', content: 'Marie Garde | Mentions légales' },
    {
      property: 'og:description',
      content: "Faites décoller votre présence en ligne par la création d'un site personnalisé.",
    },
    { property: 'og:image', content: '@/public/logo.png' },
    { property: 'og:url', content: 'https://marie-garde.com' },
  ],
});
</script>

<template>
  <div class="container">
    <div class="content">
      <h1>Mentions lègales et politiques de confidentialitè</h1>
      <h2>1- Èdition du site</h2>
      <p>
        En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
        l’économie numérique, il est précisé aux utilisateurs du site internet
        https://www.lenvoleenumerique.com l’identité des différents intervenants dans le cadre de sa
        réalisation et de son suivi:
      </p>
      <p>
        <strong>Propriétaire du site :</strong>Marie Garde – Contact : contact@lenvoleenumerique.com
        – Adresse : 101 chemin de la Salade Ponsan 31400 Toulouse.
      </p>
      <p>
        <strong>Identification de l’entreprise :</strong>Marie Garde EI – Numéro Siren : 934 339 706
        – Adresse postale : 101 chemin de la salade ponsan 31400 Toulouse
      </p>
      <p><strong>Hébergeur :</strong>Vercel</p>
      <p>
        <strong>Délégué à la protection des données : </strong>Marie Garde –
        contact@lenvoleenumerique.com
      </p>

      <h2>2- Propriètè intellectuelle et contrefaçons</h2>
      <p>
        <strong>Marie Garde</strong> est titulaire des droits de propriété intellectuelle et des
        droits d’usage sur l’ensemble des éléments accessibles sur ce site, incluant, sans s’y
        limiter, les textes, images, graphismes, logos, vidéos, structures, icônes et sons.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication ou adaptation, en tout ou en
        partie, de ces éléments, quel que soit le procédé utilisé, est strictement interdite sans
        l’autorisation écrite préalable de <strong>Marie Garde.</strong>
      </p>
      <p>
        Toute utilisation non autorisée du site ou de son contenu sera considérée comme une
        contrefaçon et pourra faire l’objet de poursuites, conformément aux articles L.335-2 et
        suivants du Code de la Propriété Intellectuelle.
      </p>

      <h2>3- Limitations de responsabilitè</h2>
      <p>
        <strong>Marie Garde</strong> ne pourra être tenue responsable des dommages, directs ou
        indirects, pouvant affecter l’équipement de l’utilisateur lors de l’accès au site
        https://www.lenvoleenumerique.com. Elle décline toute responsabilité quant à l’usage qui
        pourrait être fait des informations et contenus présents sur
        https://www.lenvoleenumerique.com. <strong>Marie Garde</strong> met tout en œuvre pour
        assurer la sécurité du site https://www.lenvoleenumerique.com. Toutefois, sa responsabilité
        ne saurait être engagée en cas d’introduction involontaire de données indésirables sur le
        site.
      </p>
      <p>
        Des espaces interactifs, tels que la section contact, sont mis à disposition des
        utilisateurs.
        <strong>Marie Garde</strong> se réserve le droit de supprimer, sans notification préalable,
        tout contenu contrevenant à la législation française, notamment en matière de protection des
        données. Le cas échéant, elle pourra engager la responsabilité civile et/ou pénale de
        l’utilisateur en cas de publication de contenus à caractère raciste, injurieux, diffamatoire
        ou pornographique, quel que soit le support utilisé (texte, image, etc.).
      </p>

      <h2>4- CNIL et gestion des donnèes personnelles</h2>
      <p>
        Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du
        site https://toybox-design.com dispose d’un droit d’accès, de modification et de suppression
        des informations collectées. Pour exercer ce droit, envoyez un message à notre Délégué à la
        Protection des Données : <strong>Marie Garde</strong> – contact@marie-garde.com.
      </p>

      <h2>5 – Liens hypertextes et cookies</h2>
      <p>
        Le site https://lenvoleenumerique.com contient des liens hypertextes vers d’autres sites et
        dégage toute responsabilité à propos de ces liens externes ou des liens créés par d’autres
        sites vers https://lenvoleenumerique.com
      </p>
      <p>
        La navigation sur le site https://lenvoleenumerique.com est susceptible de provoquer
        l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un « cookie » est un fichier
        de petite taille qui enregistre des informations relatives à la navigation d’un utilisateur
        sur un site. Les données ainsi obtenues permettent d’obtenir des mesures de fréquentation,
        par exemple.
      </p>
      <p>
        Vous avez la possibilité d’accepter ou de refuser les cookies en modifiant les paramètres de
        votre navigateur. Aucun cookie ne sera déposé sans votre consentement. Les cookies sont
        enregistrés pour une durée maximale de 1 mois.
      </p>

      <h2>6 – Droit applicable et attribution de juridiction.</h2>
      <p>
        Tout litige en relation avec l’utilisation du site https://lenvoleenumerique.com est soumis
        au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution
        exclusive de juridiction aux tribunaux compétents de Toulouse.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  @media (max-width: 768px) {
    align-items: center;
    margin-top: 80px;
  }
}
.content {
  width: 70%;
  margin-left: 200px;
  h2 {
    font-size: 1.4rem;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 0;
    justify-content: center;
  }
}
</style>
