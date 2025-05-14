<script setup lang="ts">
import About from '@/components/About.vue';
import Faq from '@/components/faq.vue';
import Presentation from '@/components/Presentation.vue';
import Projects from '@/components/Projects.vue';
import Services from '@/components/Services.vue';
import Steps from '@/components/Steps.vue';
import { useHead } from '@vueuse/head';

useHead({
  title: 'Marie Garde | Accueil',
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
    { property: 'og:title', content: 'Marie Garde | Accueil' },
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
  <Presentation />
  <About />
  <Services />
  <Steps />
  <Projects />
  <Faq />
</template>
