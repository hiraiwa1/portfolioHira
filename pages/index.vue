<template>
  <div class="mainview">
    <h1 class="mainview__title slide" ref="observe_element">
      <img src="~/static/images/name.png" alt="平岩 一樹" />
    </h1>
  </div>
</template>

<script>
export default {
  name: "home",
  head: {
  },
  data: {
    observer: null,
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          root: null,
          threshold: 1.0,
        };
      },
    },
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry && entry.isIntersecting) {
        entry.target.classList.add("is-inview");
      }
    }, this.options);
    const observe_element = this.$refs.observe_element;
    this.observer.observe(observe_element);
  },
};
</script>
