<template>
  <nav>
    <Logo />
    <Menu />
  </nav>
</template>

<script setup lang="ts">
import Logo from './svgs/Logo.vue';
import Menu from './svgs/Menu.vue';


</script>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  padding: 1rem 0.5rem;
  justify-content: space-between;
  align-items: center;
}
</style>
