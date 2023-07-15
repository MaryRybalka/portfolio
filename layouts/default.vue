<template>
  <div>
    <slot />
  </div>
</template>

<script>

</script>

<style>
:root {
  --accent: 124, 58, 237;
  --accent-gradient: linear-gradient(45deg, rgb(var(--accent)), #da62c4 30%, white 60%);
}
html {
  background: black;
  /* filter: contrast(740%) brightness(550%); */
}
body {
  max-height: 100vh;
  max-width: 100vw;
  position: relative;
  margin: 0;
}
code {
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
  Bitstream Vera Sans Mono, Courier New, monospace;
}
::-webkit-scrollbar {
  display: none;
}
</style>