<template>
  <div class="data-wrapper">
    <span class="title">Hello, My Name is Masha</span>
    <div class="personal-wrapper">
      <img class="icon" src="images/personal.JPG" alt=""/>
      <span class="description">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalData',
  data: () => ({
    text: 'I\'m frontend developer.'
  })
}
</script>

<style scoped>
.data-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 40px;
  gap: 20px;
}

.title {
  width: 100%;
  font-size: 72px;
  color: white;
  text-align: end;
}

.personal-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  .icon {
    width: 300px;
    height: 300px;
    border-radius: 100%;
    object-fit: cover;
    border: 4px solid white;
  }

  .description {
    font-size: 32px;
    font-weight: 400;
    color: white;
    text-align: center;
  }
}

@media screen and (min-width: 720px) {
  .data-wrapper {
    height: fit-content;
    flex-direction: row;
    gap: 40px;
  }

  .title {
    width: 50%;
    font-size: 112px;
    font-weight: 900;
  }

  .personal-wrapper {
    width: 50%;
    justify-content: center;

    .icon {
      margin-bottom: 52px;
    }
  }
}

@media screen and (min-width: 1200px) {
  .data-wrapper {
  }

  .title {
    font-size: 168px;
    font-weight: 900;
  }

  .personal-wrapper {
    justify-content: end;

    .icon {
      width: 400px;
      height: 400px;
      margin-bottom: 20px;
    }

    .description {
      font-size: 64px;
    }
  }
}

</style>