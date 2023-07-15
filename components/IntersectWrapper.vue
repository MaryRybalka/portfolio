<template>
    <slot/>
</template>

<script>
export default {
  name: 'IntersectWrapper',
  props: {
    elementId: '',
    timing: 20
  },
  data: () => ({
    boxElement: null,
    prevRatio: 0.0,
    increasingOpacity: "1",
    decreasingOpacity: "0",
  }),
  mounted() {
    this.boxElement = document.getElementById(this.elementId);
    this.createObserver();
  },
  methods: {
    handleIntersect(entries, _) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > this.prevRatio) {
          entry.target.style.opacity = this.increasingOpacity.replace(
              "ratio",
              entry.intersectionRatio,
          );
        } else {
          entry.target.style.opacity = this.decreasingOpacity.replace(
              "ratio",
              entry.intersectionRatio,
          );
        }

        this.prevRatio = entry.intersectionRatio;
      });
    },
    buildThresholdList() {
      const thresholds = [];

      for (let i = 1.0; i <= this.timing; i++) {
        let ratio = i / this.timing;
        thresholds.push(ratio);
      }

      thresholds.push(0);
      return thresholds;
    },
    createObserver() {
      let observer;

      let options = {
        root: null,
        rootMargin: "0px",
        threshold: this.buildThresholdList(),
      };

      observer = new IntersectionObserver(this.handleIntersect, options);
      observer.observe(this.boxElement);
    }
  }
}
</script>

<style scoped>

</style>