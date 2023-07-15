<template>
  <IntersectWrapper :elementId="id">
    <div :id="id" class="page-card">
      <h1 class="page-card--title">{{ title }}</h1>
    </div>
  </IntersectWrapper>
</template>

<script>
export default {
  name: 'Card',
  props: {
    id: '',
    title: ''
  },
}
</script>

<style scoped>
.page-card {
  scroll-snap-align: start;

  transition: all 1s ease-in-out;
  max-height: 100vh;
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-card--title {
  font-size: 32px;
  color: white;
}

@media screen and (min-width: 720px) {
  .page-card--title {
    font-size: 64px;
  }
}

@media screen and (min-width: 1280px) {
  .page-card--title {
    font-size: 128px;
  }
}

</style>