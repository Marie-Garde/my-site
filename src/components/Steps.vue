<script setup lang="ts">
import Title from './Title.vue';
import codingImag from '@/assets/illustration/coding.jpg';
</script>

<template>
  <div class="container">
    <img class="background-image" :src="codingImag" />
    <div class="content">
      <Title title="Dèroulement de votre projet" id="steps" color="white" />
      <p class="subTitle">Il ne vous reste que 5 étapes pour lancer votre solution numérique.</p>
      <div class="cards-container">
        <div class="card">
          <div class="card-content">
            <h3 class="title">Èchange sur vos besoins</h3>
            <p>
              L'étape la plus cruciale, vous allez m'expliquer vos besoins et attentes, que je
              convertirai en un document que nous allons utiliser tout au long de notre partenariat
              : la note de cadrage.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h3 class="title">Crèation de maquettes</h3>
            <p>
              Une solution numérique, surtout s'il s'agit d'un site web, se doit d'être
              différenciant et optimisé. Votre projet mérite une solution personnalisée !
            </p>
            <p>
              Nous verrons également ici l'UI/UI de la solution, afin de fournir à l'utilisateur
              l'expérience la plce agréable possible.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h3 class="title">Construction de la solution</h3>
            <p>
              Une fois les maquettes réalisées, ce sera à mon tour de construire la solution
              parfaite pour vos besoins ! En restant régulièrement en contacct avec vous pour
              vérifier que tout va dans la bonne direction.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h3 class="title">Livraison</h3>
            <p>
              Une fois la solution validée, je la déploierai pour qu'elle soit accessible et que
              vous puissiez prendre votre envol digital !
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <h3 class="title">Formation et maintenance</h3>
            <p>
              Si besoin, je peux vous former sur des outils pour vous rendre plus indépendants dans
              la gestion de votre contenu.
            </p>
            <p>
              Également, un site web doit être maintenu pour éviter qu'il soit déprécié et les
              failles de sécurité. Je peux vous aider à vous maintenir à la page.
            </p>
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
      padding: 0 0 40px 0;
      margin: 0;
      @media (max-width: 768px) {
        text-align: center;
      }
    }

    .cards-container {
      display: flex;
      justify-content: space-around;
      width: 100%;
      padding-bottom: 50px;
      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }
      .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 15%;
        background: rgba(246, 246, 246, 0.2);
        border-radius: 8px;
        text-align: center;
        &-content {
          margin: 0 10px;
        }
        @media (max-width: 768px) {
          width: 90%;
        }
      }
    }
  }
}
</style>
