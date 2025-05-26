<script setup lang="ts">
import programmer from '@/assets/illustration//programmer.jpg';
import work from '@/assets/illustration/work.jpg';
import Title from './Title.vue';
import gitHubIcon from '@/assets/icon/github.png';
import linkedinIcon from '@/assets/icon/linkedin.png';
import maltIcon from '@/assets/icon/malt.png';
</script>

<template>
  <div class="container">
    <Title title="Á propos" id="about" color="white" />

    <div class="about-me">
      <img :src="programmer" class="about-me-image" alt="programmer" />
      <div class="about-me-text">
        <h3>Moi en quelques mots</h3>
        <p>
          Après des études et une première partie de vie professionnelle en tant qu'ingénieure
          agronome, j'ai décidé de me réorienter vers ma passion initiale : le digital. 4 ans
          d'expérience dans le développement web plus tard, j'ai quitté le salariat pour le
          freelance afin de toucher à plus de projets différents et travailler avec des personnes de
          tous horizons. Passionnée et à l'écoute, comprendre vos activités et trouver le meilleur
          moyen de vous aider est ce qui me motive au quotidien. Très adaptable, je peux m'intégrer
          à une équipe déjà existante comme suivre le projet en solo.
        </p>
        <p>
          Pour ce qui est du côté personnel de la force, je pratique l'escalade depuis plusieurs
          années et prépare actuellement un Hyrox. Je dévore livres et ghibli par dizaines. J'aime
          évoluer et me donner des défis en permanence.
        </p>
        <div class="links">
          <p>Retrouvez moi sur :</p>
          <div class="buttons">
            <a
              href="https://www.malt.fr/profile/mariegarde"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img :src="maltIcon" />
              <p>Malt</p>
            </a>
            <a
              href="https://www.linkedin.com/in/marie-garde"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img :src="linkedinIcon" />
              <p>Linkedin</p>
            </a>
            <a href="https://github.com/Marie-Garde" target="_blank" rel="noopener noreferrer">
              <img :src="gitHubIcon" />
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="about-freelance">
      <div class="about-freelance-content">
        <div class="about-freelance-content-text">
          <h3>Qu'est ce qu'une solution numèrique ?</h3>
          <p>
            C’est exactement ce que je propose. Aujourd’hui, le digital est partout, et démarrer ou
            faire évoluer une entreprise sans s’y appuyer est devenu presque impossible. Que ce soit
            pour se rendre visible, vendre, mieux s’organiser ou gagner du temps, les outils
            numériques sont devenus indispensables.
          </p>
          <p>Une solution numérique, c’est par exemple :</p>
          <ul>
            <li>un site vitrine pour présenter votre activité,</li>
            <li>un site e-commerce pour vendre vos produits ou services,</li>
            <li>
              un outil interne pour faciliter la gestion de votre équipe, vos tâches, vos
              rendez-vous...
            </li>
          </ul>

          <p>
            Mon rôle, c’est de vous accompagner dans cette transition digitale, avec des outils
            adaptés à vos besoins, pensés pour vous simplifier la vie. Moins de stress, plus de
            clarté, plus d’impact.
          </p>
        </div>
        <img class="about-freelance-content-image" :src="work" alt="work-laptop" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.about-me {
  display: flex;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    margin: 0 20px;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
  &-image {
    width: 40%;
    border-radius: 8px;
    box-shadow: 0px 5px 5px #25262b;
    @media (max-width: 768px) {
      margin-top: 25px;
      width: 90%;
    }
  }
  &-text {
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    @media (max-width: 768px) {
      width: 90%;
      text-align: center;
      align-items: center;
      margin-left: 0;
      h3 {
        margin: 5px 0;
      }
      p {
        margin: 5px 0;
      }
    }
  }

  .links {
    width: 50%;
    @media (min-width: 768px) and (max-width: 1280px) {
      width: 60%;
    }
    @media (max-width: 768px) {
      width: 90%;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      a {
        width: 100px;
        border-radius: 5px;
        background-color: $white;
        border: 0;
        color: inherit;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        transition:
          background-color 0.3s ease,
          transform 0.2s ease;
        img {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
        p {
          color: $black;
        }
      }
      a:hover {
        background-color: $orange;
      }
    }
  }
}

.about-freelance {
  margin-top: 40px;
  background-color: $black-dark;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 60px 0;

  &-content {
    display: flex;
    max-width: 1200px;
    @media (max-width: 1024px) {
      padding: 0 20px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      margin-top: 20px;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
    &-image {
      width: 40%;
      border-radius: 5px;
      box-shadow: 0px 5px 5px #25262b;
      @media (max-width: 768px) {
        width: 90%;
      }
    }
    &-text {
      margin-right: 30px;
      @media (max-width: 768px) {
        margin: 0;
      }
      ul {
        list-style-position: inside;
        padding: 0;
      }
    }
  }
}
</style>
