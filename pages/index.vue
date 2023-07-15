<template>
  <div id="cards-wrapper" class="cards-wrapper">
    <Card v-for="card of cards" :id="card.id">
      <PersonalData/>
    </Card>
  </div>
</template>
<script>
export default {
  name: 'index',
  data: () => ({
    numberOfElements: 4,
    cards: [
      {
        id: 'about',
        title: 'My name is Masha 1',
      },
      {
        id: 'education',
        title: 'My name is Masha 2',
      },
      {
        id: 'work',
        title: 'My name is Masha 3',
      },
      {
        id: 'interests',
        title: 'My name is Masha 4',
      },
    ]
  }),
  mounted() {
    const cardsWrapperEl = document.getElementById('cards-wrapper');
    if (cardsWrapperEl) {
      cardsWrapperEl.addEventListener("scroll", () => {
        cardsWrapperEl.style.background = `radial-gradient(circle at 50% ${cardsWrapperEl.scrollTop * this.numberOfElements * 100 / window.outerHeight}px, rgba(0, 60, 255, 1), rgba(255, 0, 66, 0.97))`;
      })
    }
  }
}
</script>

<style scoped>

.cards-wrapper {
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  overflow: auto;

  background: radial-gradient(circle at 50% 0, rgba(0, 60, 255, 1), rgba(255, 0, 66, 0.97)),
  url(/noise.svg);

  scroll-snap-type: y mandatory;
}
</style>