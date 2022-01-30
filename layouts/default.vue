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
  components: {
    Header,
    Footer,
  },
  PageTransition: {
    name: "page",
    mode: "out-in",
  },
};
</script>
<style>
.page-enter-active {
  transition: all 0.3s ease;
}
.page-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.page-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100vw);
  opacity: 0;
}
.page-leave-to {
  transform: translateX(-100vw);
  opacity: 0;
}
</style>
