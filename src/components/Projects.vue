<script setup lang="ts">
import projects from '@/utils/projects.json';
import Title from './Title.vue';
import { ref } from 'vue';

const visibleProjects = ref(3);

const showMore = () => {
  visibleProjects.value += 3;
};

const showLess = () => {
  visibleProjects.value -= 3;
};
</script>

<template>
  <div class="container">
    <div class="content">
      <Title title="Mes projets passès" id="projects" color="white" />

      <ul class="cards-container">
        <li
          v-for="(project, index) in projects.projects.slice(0, visibleProjects)"
          :key="index"
          class="item"
        >
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <p>{{ project.location }}</p>
          <ul class="item-skills">
            <li v-for="(skill, index) in project.skills" :key="index">
              <p>{{ skill }}</p>
            </li>
          </ul>
          <a v-if="project.link" class="item-link" :href="project.link" target="_blank">
            <i class="fa-solid fa-up-right-from-square"></i>Voir le site</a
          >
        </li>
      </ul>

      <hr class="separator" />

      <div class="buttons">
        <button
          v-if="visibleProjects < projects.projects.length"
          @click="showMore"
          class="buttons-show-more"
        >
          Voir plus
        </button>
        <button v-if="visibleProjects > 3" @click="showLess" class="buttons-show-less">
          Voir moins
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables.scss' as *;

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;

  .content {
    max-width: 1200px;
    @media (max-width: 1024px) {
      margin: 0 20px;
    }
    @media (max-width: 768px) {
      width: 90%;
    }
  }
}

.cards-container {
  list-style: none;
  columns: 3;
  column-gap: 10px;
  padding-left: 0;
}

.item {
  background: #494b56;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  break-inside: avoid;
  transition: transform 0.3s ease;
  box-shadow: 0px 5px 5px #25262b;

  &:hover {
    transform: translateY(-5px);
    h3 {
      color: $green;
    }
  }

  h3 {
    color: $orange;
    margin: 0;
  }

  &-link {
    color: $white-soft;
    display: flex;
    margin-top: 20px;
    vertical-align: middle;
    i {
      margin: 3px 5px 0 0;
    }
  }

  &-skills {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 10px;
    li {
      background-color: $grey-soft;
      color: $black;
      border-radius: 5px;
      padding: 0 10px;
      text-align: center;
      p {
        margin: 5px 0;
      }
    }
  }
}

.separator {
  border: none;
  height: 1px;
  background-color: $white;
  width: 100%;
  margin: 40px 0;
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  &-show-more {
    background-color: $orange;
    color: $white;
    padding: 20px 30px;
    border: none;
    border-radius: 5px;
    margin-right: 20px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.3s;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  &-show-less {
    background-color: transparent;
    color: $white;
    padding: 20px 30px;
    border: $white 2px solid;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.3s;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
}

@media (max-width: 1024px) {
  .cards-container {
    columns: 2;
  }
}
</style>
