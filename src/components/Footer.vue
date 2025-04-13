<script setup lang="ts">
import { RoutesName } from '@/routes/routeName';
</script>

<template>
  <div class="footer">
    <div class="first-line">
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
.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .first-line {
    display: flex;
    p {
      margin: 0;
      padding-right: 3px;
    }
  }
  p {
    margin: 0;
  }
  .router-link {
    cursor: pointer;
    text-decoration: none;
    color: $white-soft;
  }
}
</style>
