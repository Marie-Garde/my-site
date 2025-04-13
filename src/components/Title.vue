<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  id: { type: String, required: true },
  color: { type: String, required: true },
});
</script>

<template>
  <h2 :id="id" :class="['title', `title-${color}`]">{{ title }}</h2>
</template>

<style scoped lang="scss">
@use '@/assets/variables.scss' as *;

.title {
  text-align: center;
  padding: 70px 0 20px 0;
  margin: 0;
  &-white {
    color: $white-soft;
  }
  &-black {
    color: $black;
  }
}
</style>
