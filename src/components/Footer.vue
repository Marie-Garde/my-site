<script setup lang="ts">
import { RoutesName } from '@/routes/routeName';
</script>

<template>
  <div class="footer">
    <div class="left">
      <p>2025 - © Marie Garde | Tous droits réservés |</p>
      <RouterLink class="router-link" :to="{ name: RoutesName.LEGAL }"
        >Informations légales</RouterLink
      >
    </div>

    <p>SIREN : 934 339 706</p>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables.scss' as *;
@use '@/assets/breakpoints' as *;

.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  @include max-size(s) {
    flex-direction: column;
  }
  .left {
    display: flex;
    @include max-size(s) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    p {
      margin: 0 5px 0 10px;
    }
  }
  p {
    margin: 0 10px;
  }
  .router-link {
    cursor: pointer;
    text-decoration: none;
    color: $white-soft;
  }
}
</style>
