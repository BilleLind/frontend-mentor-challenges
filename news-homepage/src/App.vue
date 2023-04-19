<script setup lang="ts">
import Navigation from './components/Navigation.vue'
</script>

<template>
  <Navigation />
  <main>
    <!-- Image -->
    <picture>
      <source srcset="assets/image-web-3-desktop.jpg" media="(min-width:740px)">
      <img src="assets/image-web-3-mobile.jpg" alt="">
    </picture>

    <!-- Heading, Text and Button -->
    <section class="headings">
      <h1>The Bright Future of Web 3.0?</h1>
      <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of
        the people. But is it really fulfilling its promise?</p>
      <button>
        READ MORE
      </button>
    </section>

    <!-- News Sections -->
    <section class="news">
      <h2>New</h2>
      <article>
        <a href="">
          <h3>Hydrogen VS Electric Cars</h3>
        </a>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </article>
      <article>
        <a href="">
          <h3>The Downsides of AI Artistry</h3>
        </a>
        <p>What are the possible adverse effects of on-demand AI image generation?</p>
      </article>
      <article>
        <a href="">
          <h3>Is VC Funding Drying Up?</h3>
        </a>
        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
      </article>
    </section>


    <!-- Suggestions -->
  <section class="suggestions">
    <article>
      <img src="" alt="">
      <div>
        <h3></h3>
        <a href=""></a>
        <p></p>
      </div>
    </article>
  </section>
  <!-- 
01
  Reviving Retro PCs
  What happens when old PCs are given modern upgrades?

  02
  Top 10 Laptops of 2022
  Our best picks for various needs and budgets.

    03
      The Growth of Gaming
      How the pandemic has sparked fresh opportunities.

       -->
  </main>
</template>

<style scoped>
main {
  gap: 1rem 0rem;
  display: grid;
  margin-inline: 1rem;
  margin-top: 1rem;
}

img {
  width: 100%;
}

.headings>p {
  color: var(--dark-greyish-blue);
}

section>* {
  margin: 1rem 0rem;
}

h2 {
  font-size: xx-large;
  font-weight: bold;
  color: var(--soft-orange);
}

.news {
  padding: 1rem;
  background-color: var(--very-dark-blue);
  color: var(--off-white);

}

.news>article>a>h3 {
  font-weight: bolder;
  font-size: large;
}

.news>article>p {
  margin-top: 0.5rem;
  color: var(--greyish-blue);
}

.news>article {
  padding-top: 1rem;
}

.news>article:not(:last-child) {
  border-bottom: 1px solid var(--dark-greyish-blue);
  padding-bottom: 1rem;
}

button {
  background-color: var(--soft-red);
  color: var(--off-white);
  padding: 0.75rem 1.5rem;
  margin: 1rem 0rem;
  letter-spacing: 0.3rem;
  font-weight: bolder;
}

button:hover {
  transition: all;
  transition-timing-function: ease-in-out;
  transition-duration: 400ms;
  background-color: var(--very-dark-blue);
  cursor: pointer;
}
</style>
