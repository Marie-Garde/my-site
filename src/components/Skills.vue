<script setup lang="ts">
import skills from '@/utils/skills.json';
import owl from '@/assets/illustration/chouette-droite.vue';
</script>

<template>
  <h1 id="skills" class="title">Mes compètences</h1>
  <p>
    Forte de 4 ans d'expérience dans le développement web, voici les technologies sur lesquelles je
    peux vous accompagner :
  </p>
  <div class="skills">
    <owl class="owl" />
    <div>
      <ul
        v-for="(skillsGroup, index) in skills"
        :key="index"
        :class="[
          'skills-line',
          {
            'first-line': index === 0,
            'second-line': index === 1,
            'third-line': index === 2,
            'fourth-line': index === 3,
            'fifth-line': index === 4,
          },
        ]"
      >
        <li v-for="skills in skillsGroup" class="skills-line-unit">
          <p>{{ skills }}</p>
        </li>
      </ul>
    </div>
  </div>

  <p class="bubble">
    Motivée et déterminée : si je manque de pratique sur un aspect de votre projet, je ferai en
    sorte de combler mes lacunes rapidement pour vous fournir une solution de qualité.
  </p>
</template>

<style scoped lang="scss">
@use '@/assets/variables.scss' as *;

.title {
  text-align: center;
  padding-top: 80px;
}

.skills {
  display: flex;
  width: 100%;
  margin-bottom: 30px;
}

.skills-line {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  &-unit {
    padding: 5px 15px;
    border-radius: 5px;
    margin: 0 10px;
    list-style: none;
    p {
      margin: 0;
    }
  }
}

.first-line {
  .skills-line-unit {
    background-color: rgba(36, 195, 182, 0.5);
  }
}

.second-line {
  .skills-line-unit {
    background-color: rgba(136, 216, 192, 0.5);
  }
}

.third-line {
  .skills-line-unit {
    background-color: rgba(241, 196, 15, 0.5);
  }
}

.fifth-line {
  .skills-line-unit {
    background-color: rgba(230, 126, 34, 0.5);
  }
}

.fourth-line {
  .skills-line-unit {
    background-color: rgba(255, 165, 0, 0.5);
  }
}

.bubble {
  position: relative;
  background: #000000;
  padding: 10px 20px;
  border-radius: 15px;
  width: fit-content;
  max-width: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
}

.bubble::before {
  content: '';
  position: absolute;
  top: -30px;
  left: 25%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 20px 30px 0;
  border-color: transparent transparent #000000 transparent;
}
</style>
