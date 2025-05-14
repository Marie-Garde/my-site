<script setup lang="ts">
import Title from './Title.vue';
import codingImag from '@/assets/illustration/coding.jpg';
import deploy from '@/assets/icon/deploy.png';
import design from '@/assets/icon/design.png';
import dev from '@/assets/icon/dev.png';
import meeting from '@/assets/icon/meeting.png';
import training from '@/assets/icon/training.png';
import maintenance from '@/assets/icon/maintenance.png';
</script>

<template>
  <div class="container">
    <img class="background-image" :src="codingImag" alt="code-developpement" />
    <div class="content">
      <Title title="Dèroulement de votre projet" id="steps" color="white" />
      <p class="subTitle">Il ne vous reste que 5 étapes pour lancer votre solution numérique.</p>
      <div class="cards-container">
        <div class="first-line">
          <div class="card">
            <div class="card-content">
              <img class="icon" :src="meeting" alt="rendez-vous" />
              <h3 class="title">Èchange</h3>
              <p>
                Vous allez m'expliquer vos besoins et attentes, et nous allons construire ensemble
                la note de cadrage du projet !
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <img class="icon" :src="design" alt="design" />
              <h3 class="title">Maquettes</h3>
              <p>
                Une solution numérique se doit d'être différenciant et optimisé. Votre projet mérite
                une solution personnalisée !
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <img class="icon" :src="dev" alt="développement" />
              <h3 class="title">Construction</h3>
              <p>Ce sera à mon tour de construire la solution parfaite pour vos besoins !</p>
            </div>
          </div>
        </div>
        <div class="second-line">
          <div class="card">
            <div class="card-content">
              <img class="icon" :src="deploy" alt="déploiement" />
              <h3 class="title">Livraison</h3>
              <p>
                Déploiement de votre solution pour qu'elle soit accessible et que vous puissiez
                prendre votre Envol Digital !
              </p>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <img class="icon" :src="training" alt="formation" />
              <h3 class="title">Formation</h3>
              <p>
                Je peux vous former sur des outils pour vous rendre plus indépendants dans la
                gestion de votre contenu.
              </p>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <img class="icon" :src="maintenance" alt="maintenance" />
              <h3 class="title">Maintenance</h3>
              <p>
                Un site web doit être maintenu pour éviter qu'il soit déprécié et les failles de
                sécurité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;

.container {
  position: relative;
  width: 100%;
  height: fit-content;
  overflow: hidden;

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .content {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    z-index: 1;

    .subTitle {
      padding: 0 0 60px 0;
      margin: 0;
      @media (max-width: 768px) {
        text-align: center;
      }
    }

    .cards-container {
      display: flex;
      flex-direction: column;
      max-width: 1200px;
      padding-bottom: 50px;
      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }

      .first-line {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 20px;
      }

      .second-line {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 30%;
        background: rgba(246, 246, 246, 0.4);
        border-radius: 8px;
        text-align: center;
        &-content {
          margin: 0 10px;
          padding: 10px;
          .icon {
            width: 70px;
            height: 70px;
          }
          .title {
            margin: 10px 0;
          }
        }
        @media (max-width: 768px) {
          width: 90%;
        }
      }
    }
  }
}
</style>
