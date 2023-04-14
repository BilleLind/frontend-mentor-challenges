<template>
  <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg" @click="toggleMenu()" v-if="!menuToggle"
    class="menuToggle">
    <g fill="#00001A" fill-rule="evenodd">
      <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
      <path d="M0 0h40v3H0z" />
    </g>
  </svg>


  <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg" @click="toggleMenu()" v-if="menuToggle"
    class="menuToggle toggleOn">
    <g fill="#00001A" fill-rule="evenodd">
      <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
      <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
    </g>
  </svg>
  <div v-if="menuToggle" class="menuOpenLeft" @click="toggleMenu()"></div>
  <div :class="{ 'menuOpen': menuToggle, 'menuContent': !menuToggle }">
    <a href="">Home</a>
    <a href="">New</a>
    <a href="">Popular</a>
    <a href="">Trending</a>
    <a href="">Categories</a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const menuToggle = ref(false);

const toggleMenu = () => {
  menuToggle.value = !menuToggle.value
}
</script>

<style scoped>
.menuContent {
  display: flex;
  gap: 0px 1rem;
  color: var(--greyish-blue);
}

.menuOpen {
  display: flex;
  flex-direction: column;
  gap: 1rem 1px;
  top: 0%;
  right: 0%;
  width: 60%;
  bottom: 0%;
  padding-left: 1rem;
  max-height: 100%;
  background-color: white;
  position: absolute;
  padding-top: min( 10rem, 20%);
  justify-content: start;
  align-items: start;
}

.menuOpenLeft {
  position: absolute;
  left: 0%;
  width:40%;
  opacity: 0.6;
  background-color: black;
  top: 0%;
  bottom: 0%;
}

.toggleOn {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  padding: 2rem 1.5rem;
}

@media (700px > width) {
  .menuContent {
    display: none;
  }
}

@media (700px < width) {
  .menuToggle {
    visibility: hidden;
  }
}
</style>
