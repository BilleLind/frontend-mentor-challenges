<script setup lang="ts">
import Navigation from './components/Navigation.vue'
</script>

<template>
  <Navigation />
  <main>
    <!-- Heading, Text and Button -->
    <section class="headings">
      <picture>
        <source srcset="assets/image-web-3-desktop.jpg" media="(min-width:740px)">
        <img src="assets/image-web-3-mobile.jpg" alt="">
      </picture>
      <div>
        <h1>The Bright Future of Web 3.0?</h1>

        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of
          the people. But is it really fulfilling its promise?</p>
        <button>
          READ MORE
        </button>
      </div>
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
        <img src="assets/image-retro-pcs.jpg" alt="Retro PCs">
        <div>
          <h3>01</h3>
          <a href="">Reviving Retro PCs</a>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </article>
      <article>
        <img src="assets/image-top-laptops.jpg" alt="Keyboard pecs">
        <div>
          <h3>02</h3>
          <a href="">Top 10 Laptops of 2022</a>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </article>
      <article>
        <img src="assets/image-gaming-growth.jpg" alt="Levitating Controller">
        <div>
          <h3>03</h3>
          <a href="">The Growth of Gaming</a>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </article>
    </section>

  </main>
</template>

<style scoped>
main {
  gap: 1rem 0rem;
  display: grid;
  margin-inline: 1rem;
}

img {
  width: 100%;
}

.headings>div>p {
  color: var(--dark-greyish-blue);
}

.headings>div {
  display: grid;
  /* grid-row: span 2/ span 2; */
  gap: 1rem 0rem;
}

.headings>div>button {
  width: fit-content;
}

section>*:not(:first-child) {
  margin: 1rem 0rem;
}

h2 {
  font-size: xx-large;
  font-weight: bold;
  color: var(--soft-orange);
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


.suggestions {
  display: flex;
}

.suggestions>article {
  display: flex;
  gap: 1rem;
}

.suggestions>article>img {
  aspect-ratio: 3/4;
  max-width: 30%;
}

.suggestions>article>div>h3 {
  color: var(--greyish-blue);
  font-weight: bold;
  font-size: xx-large;
}

.suggestions>article>div>a {
  font-weight: bold;
  font-size: large;
  color: var(--very-dark-blue);
}

.suggestions>article>div>a:hover {
  color: var(--soft-orange);
}

.suggestions>article>div>p {
  margin-top: 0.5rem;
  color: var(--dark-greyish-blue)
}

@media (700px > width) {
  .suggestions {
    flex-direction: column;
  }
}

@media (700px <=width) {
  main {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0rem 1rem;
  }

  .headings {
    grid-column: span 2 / span 2;
  }

  .headings>div {
    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-auto-flow: column;
  }

  .headings>div>h1 {
    grid-row: span 2 / span 2;
  }

  .headings>div>button {
    height: min-content;
  }

  .suggestions {
    grid-column: span 3 / span 3;
    margin: 1rem 0rem;
  }

  .suggestions>article>img {
    object-fit: cover;
    max-height: 11rem;
  }
}
</style>
