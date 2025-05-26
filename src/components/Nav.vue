<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import logo from '../assets/illustration/logo.vue';
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { RoutesName } from '@/routes/routeName';
import { isMobile } from '@/reactives/isMobile';
import burgerMenu from '@/assets/illustration/burger-menu.vue';
import cross from '@/assets/illustration/cross.vue';

const mobile = isMobile();

const isScrolled = ref(false);
const menuOpen = ref(false);
const router = useRouter();
const route = useRoute();

const isHomePage = computed(() => {
  return route.name === RoutesName.HOME;
});

function handleScroll() {
  isScrolled.value = window.scrollY > 50;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function scrollToTop() {
  if (route.name === RoutesName.LEGAL || route.name === RoutesName.CONTACT) {
    router.push({ name: RoutesName.HOME });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function goToContact() {
  menuOpen.value = false;
  router.push({ name: RoutesName.CONTACT });
}
</script>

<template>
  <nav :class="['navbar', { scrolled: isScrolled, notHomePage: !isHomePage }]">
    <div class="navbar-detail">
      <logo class="logo" @click="scrollToTop" />

      <div v-if="mobile && isHomePage" class="burger-menu" @click="menuOpen = !menuOpen">
        <burgerMenu />
      </div>

      <ul v-if="!mobile && route.name === RoutesName.HOME">
        <li><a href="#about" v-smooth-scroll>A propos</a></li>
        <li><a href="#services" v-smooth-scroll>Mes services</a></li>
        <li><a href="#steps" v-smooth-scroll>Les étapes de votre projet</a></li>
        <li><a href="#projects" v-smooth-scroll>Projets passés</a></li>
        <li><button class="contact-me" @click="goToContact()">Contactez-moi</button></li>
      </ul>

      <div v-if="mobile && menuOpen" class="mobile-menu">
        <cross class="cross" @click="menuOpen = !menuOpen" />
        <ul class="list">
          <li><a href="#about" v-smooth-scroll @click="menuOpen = false">A propos</a></li>
          <li><a href="#services" v-smooth-scroll @click="menuOpen = false">Mes services</a></li>
          <li>
            <a href="#steps" v-smooth-scroll @click="menuOpen = false"
              >Les étapes de votre projet</a
            >
          </li>
          <li><a href="#projects" v-smooth-scroll @click="menuOpen = false">Projets passés</a></li>
          <li>
            <button class="contact-me" @click="goToContact()">Contactez-moi</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/variables.scss' as *;

.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  transition: background-color 0.5s ease-in-out;
  background-color: transparent;

  &.notHomePage,
  &.scrolled {
    background-color: #333;
  }

  .navbar-detail {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    max-width: 170px;
    fill: $white-soft;
    cursor: pointer;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 30px;

    li {
      list-style: none;

      a {
        color: $white-soft;
        text-decoration: none;
      }

      .contact-me {
        background-color: $orange;
        color: $black;
        padding: 10px 14px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
      }
    }
  }

  .burger-menu {
    display: none;
    cursor: pointer;
    padding: 10px;
  }

  .mobile-menu {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px;
    margin: 0;
    gap: 20px;
    border-radius: 5px;
    height: 100vh;

    .cross {
      justify-content: flex-end;
      align-items: flex-end;
    }

    .list {
      display: flex;
      flex-direction: column;
      width: 100%;
      li {
        list-style: none;
        a {
          color: $white-soft;
          text-decoration: none;
        }

        .contact-me {
          background-color: $orange;
          color: $black;
          padding: 8px 12px;
          border-radius: 5px;
        }
      }
    }
  }

  /* Menu burger en mobile */
  @media (max-width: 768px) {
    .burger-menu {
      display: block;
    }
  }
}
</style>
