<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import backgroundImage from '@/assets/illustration/background-presentation.png';
import backgroundMobileImage from '@/assets/illustration/background-presentation-mobile.png';
import owls from '@/assets/illustration/chouettes-couleur-blanc.png';
import { isMobile } from '@/reactives/isMobile';
import { useRouter } from 'vue-router';
import { RoutesName } from '@/routes/routeName';

const mobile = isMobile();
const router = useRouter();

const words = [
  'Marie !',
  'crèative !',
  'passionnèe !',
  'engagèe !',
  "façonneuse d'idèes !",
  'enthousiaste !',
];

const currentWord = ref(words[0]);
let index: number = 0;
let intervalId: number;

onMounted(() => {
  intervalId = setInterval(() => {
    index = (index + 1) % words.length;
    currentWord.value = words[index];
  }, 2000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

function goToContact() {
  router.push({ name: RoutesName.CONTACT });
}
</script>

<template>
  <div class="container">
    <img v-if="!mobile" class="background-image" :src="backgroundImage" alt="presentation" />
    <img v-else class="background-image" :src="backgroundMobileImage" alt="presentation" />

    <div class="text">
      <div v-if="!mobile">
        <h1>Bonjour,</h1>
        <h1>
          je suis <span class="currentWord">{{ currentWord }}</span>
        </h1>
      </div>
      <div v-else>
        <h1>Bonjour, je suis</h1>
        <h1 class="currentWord">{{ currentWord }}</h1>
      </div>
      <p>
        Je vous aide à développer votre présence en ligne par la co-création d'outils numériques
        personnalisés !
      </p>
      <div class="contact">
        <p>Vous avez un projet ?</p>
        <a @click="goToContact()">Contactez-moi !</a>
      </div>
    </div>
  </div>

  <img v-if="!mobile" class="owls" :src="owls" alt="chouettes-colorées" />
</template>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;
@use '@/assets/breakpoints' as *;

.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-bottom: 70px;
  @include max-size(s) {
    margin-bottom: 0;
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .text {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 90%;
    max-width: 50%;
    padding: 0 3vw;
    margin-left: 5vw;
    z-index: 1;

    @include max-size(s) {
      margin: 0 auto;
      max-width: 90%;
      text-align: center;
      justify-content: start;
      padding-top: 40%;
    }

    h1 {
      margin: 0;
      font-size: 4rem;

      @include between(s, l) {
        font-size: 3.5rem;
      }

      @include max-size(s) {
        font-size: 2.5rem;
      }
    }

    .currentWord {
      color: $orange;
    }

    p {
      font-size: 2rem;
      margin: 0;

      @include between(s, l) {
        font-size: 1.4rem;
      }

      @include max-size(s) {
        font-size: 1.3rem;
      }
    }

    .contact {
      display: flex;

      @include max-size(s) {
        padding-top: 10px;
        flex-direction: column;
      }

      a {
        font-size: 2rem;
        margin-left: 5px;
        color: $green;
        text-decoration: underline 2px;
        cursor: pointer;

        @include between(s, l) {
          font-size: 1.4rem;
        }

        @include max-size(s) {
          font-size: 1.3rem;
        }
      }
    }
  }
}

.owls {
  position: absolute;
  bottom: -15%;
  left: 25%;
  transform: translateX(-50%);
  z-index: 1;
  width: 700px;

  @include between(m, l) {
    width: 500px;
    bottom: -10%;
    left: 25%;
  }

  @include between(l, xl) {
    bottom: -12%;
    left: 25%;
  }

  @include min-size(xl) {
    bottom: -10%;
    left: 20%;
  }
}
</style>
