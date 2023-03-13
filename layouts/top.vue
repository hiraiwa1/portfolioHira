<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  layout: "home",
  components: {
    Header,
    Footer,
  },
  PageTransition: {
    name: "top",
    mode: "out-in",
  },
};
</script>
<style>
.top-enter-active {
  transition: all 0.3s ease;
}
.top-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.top-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.top-leave-to {
  opacity: 0;
}
</style>
