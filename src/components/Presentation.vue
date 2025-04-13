<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import me from '@/assets/illustration/me.png';
import backgroundImage from '@/assets/illustration/background-top.jpg';
import owls from '@/assets/illustration/chouettes-colorées-blanc.png';

const words = [
  'Marie !',
  'crèative !',
  'passionnèe !',
  'ta mére ?',
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
</script>

<template>
  <div class="container">
    <img class="background-image" :src="backgroundImage" />
    <div class="content">
      <div class="text">
        <h1>Bonjour, je suis</h1>
        <h1 class="currentWord">{{ currentWord }}</h1>
        <p>
          Je vous aide à développer votre présence en ligne par la co-création d'outils numériques
          personnalisés !
        </p>
        <div class="contact">
          <p>Vous avez un projet ?</p>
          <a href="#contact" v-smooth-scroll>Contactez-moi !</a>
        </div>
      </div>

      <img class="me" :src="me" />
    </div>
  </div>

  <img class="owls" :src="owls" />
</template>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;

.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-bottom: 70px;

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
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 100%;
    padding: 0 3vw;
    z-index: 1;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0;
      width: 100%;
      align-items: center;
      text-align: center;
      height: 90%;
      margin-top: 10vh;
    }

    .text {
      margin-left: 5vw;
      padding: 0;
      height: 100%;
      max-width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media (max-width: 768px) {
        margin-left: 0;
        max-width: 90%;
      }
      h1 {
        margin: 0;
        font-size: 4rem;
        @media (min-width: 768px) and (max-width: 1280px) {
          font-size: 3.5rem;
        }
        @media (max-width: 768px) {
          font-size: 2.5rem;
        }
      }
      .currentWord {
        color: $orange;
      }
      p {
        font-size: 2rem;
        margin: 0;

        @media (min-width: 768px) and (max-width: 1280px) {
          font-size: 1.4rem;
        }
        @media (max-width: 768px) {
          font-size: 1.3rem;
        }
      }
      .contact {
        display: flex;
        @media (max-width: 768px) {
          padding-top: 10px;
          flex-direction: column;
        }
        a {
          font-size: 2rem;
          margin-left: 5px;
          color: $green;
          @media (min-width: 768px) and (max-width: 1280px) {
            font-size: 1.4rem;
          }
          @media (max-width: 768px) {
            font-size: 1.3rem;
          }
        }
      }
    }
  }

  .me {
    max-height: 90%;
    @media (max-width: 768px) {
      width: 70%;
    }
    @media (min-width: 768px) and (max-width: 1280px) {
      max-width: 40%;
    }
  }
}

.owls {
  position: absolute;
  bottom: -11%;
  left: 25%;
  transform: translateX(-50%);
  z-index: 1;
  width: 700px;
  @media (min-width: 768px) and (max-width: 1280px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 60%;
    bottom: -6%;
    left: 35%;
  }
}
</style>
