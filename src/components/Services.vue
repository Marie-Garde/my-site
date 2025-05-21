<script setup lang="ts">
import integrationImage from '@/assets/illustration/integration.png';
import maintenance from '@/assets/illustration/maintenance.png';
import refonte from '@/assets/illustration/refonte.png';
import responsive from '@/assets/illustration/responsive.png';
import seo from '@/assets/illustration/seo.png';
import Title from './Title.vue';
import { useRouter } from 'vue-router';
import { RoutesName } from '@/routes/routeName';

const router = useRouter();

function goToContact() {
  router.push({ name: RoutesName.CONTACT });
}
</script>

<template>
  <div class="container">
    <div class="content">
      <Title title="Mes services" id="services" color="white" />

      <div class="cards-container">
        <div class="first-line">
          <div class="skill">
            <img :src="integrationImage" alt="integration" />
            <div class="skill-text">
              <h3>Intègration web</h3>
              <p>
                L'intégration web comprend la création de maquettes, leur codage et le déploiement
                de votre solution.
              </p>
            </div>
          </div>
          <div class="skill">
            <img :src="refonte" alt="refonte" />
            <div class="skill-text">
              <h3>Refonte de sites web</h3>
              <p>
                Vous avez un site web mais son design est dépassé ou il ne correspond plus à vos
                besoins ? Je peux vous accompagner !
              </p>
            </div>
          </div>
        </div>
        <div class="second-line">
          <div class="skill">
            <img :src="responsive" alt="responsive" />
            <h3>Responsive</h3>
            <p>
              A l'aire du smartphone, il est crucial que votre site s'adapte à différentes tailles
              de support.
            </p>
          </div>
          <div class="skill">
            <img :src="seo" alt="référencement" />
            <h3>Rèfèrencement naturel</h3>
            <p>
              Je rends votre site visible et priorisé par Google et les autres moteurs de recherche
              (SEO). Je peux également vous accompagner dans la recherche d'un référencement payant
              (SEA).
            </p>
          </div>
          <div class="skill">
            <img :src="maintenance" alt="maintenance" />
            <h3>Maintenance</h3>
            <p>
              Un site doit être maintenu et régulièrement mis à jour pour des raisons de sécurités
              et de fonctionnalités, je ne vous lâcherai pas !
            </p>
          </div>
        </div>
      </div>
      <div class="contact-me">
        <h3>Vous avez un projet qui rentre dans mes compètences ? <span>Parlons en !</span></h3>
        <button class="contact-me-button" @click="goToContact()">Contactez-moi</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables.scss' as *;

.container {
  display: flex;
  justify-content: center;
  padding-bottom: 90px;
  width: 100%;

  .content {
    max-width: 1300px;
    @media (max-width: 1024px) {
      margin: 0 20px;
    }
  }
}

.sub-title {
  text-align: center;
  margin-bottom: 30px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.first-line,
.second-line {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 20px;
  }
}

.skill {
  background-color: #494b56;
  border-radius: 8px;
  box-shadow: 0px 5px 5px #25262b;
  img {
    width: 250px;
  }
}

.first-line {
  .skill {
    width: calc(50% - 68px);
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 50px 24px;
    img {
      margin: auto;
      width: 40%;
      height: fit-content;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
      align-items: center;
      text-align: center;
      padding: 0;
      img {
        padding-top: 20px;
      }
      h3 {
        margin: 10px 0;
      }
      p {
        padding: 0 40px;
      }
    }
  }
}

.second-line {
  .skill {
    width: calc(33% - 68px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    p {
      text-align: center;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
      align-items: center;
      text-align: center;
      padding: 0;
      img {
        padding-top: 20px;
      }
      h3 {
        margin: 10px 0;
      }
      p {
        padding: 0 40px;
      }
    }
    @media (min-width: 768px) and (max-width: 1280px) {
      h3 {
        text-align: center;
      }
    }
  }
}

.contact-me {
  text-align: center;
  margin-top: 40px;

  span {
    color: $green;
  }
  &-button {
    cursor: pointer;
    background-color: $orange;
    color: $black;
    font-size: 24px;
    padding: 16px 22px;
    border-radius: 5px;
    text-decoration: none;
    border: none;

    &:hover {
      color: $white-soft;
      transition: color 0.2s ease-in-out;
    }
  }
}
</style>
