<template>
  <IntersectWrapper :elementId="id" :timing="20">
    <div :id="id" class="page-card">
      <slot/>
    </div>
  </IntersectWrapper>
</template>

<script>
export default {
  name: 'Card',
  props: {
    id: '',
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

</style>