<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  title: String,
});

const isOpen = ref(false);
const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="accordion-item">
    <button class="accordion-header" @click="toggle">
      <span>{{ title }}</span>
      <svg
        class="icon"
        :class="{ open: isOpen }"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <transition name="accordion">
      <div class="accordion-body" v-show="isOpen">
        <slot />
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;

.accordion-item {
  border-bottom: 1px solid $black;
  padding: 1rem 0;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  width: 100%;
  font-size: 1.2rem;
  color: $black;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
}

.accordion-body {
  padding-right: 15px;
  color: $black;
}

.icon {
  transition: transform 0.3s ease;
}
.icon.open {
  transform: rotate(180deg);
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
