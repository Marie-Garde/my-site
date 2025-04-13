<script setup lang="ts">
import projects from '@/utils/projects.json';
import Title from './Title.vue';
import { ref } from 'vue';

const visibleProjects = ref(3);

const showMore = () => {
  visibleProjects.value += 3;
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

      <button
        v-if="visibleProjects < projects.projects.length"
        @click="showMore"
        class="show-more-button"
      >
        Voir plus
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables.scss' as *;

.container {
  width: 100%;
  display: flex;
  justify-content: center;

  .content {
    width: 70%;
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

.show-more-button {
  background-color: $orange;
  color: $white;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    color: $white;
  }
}

@media (max-width: 1024px) {
  .cards-container {
    columns: 2;
  }
}
</style>
