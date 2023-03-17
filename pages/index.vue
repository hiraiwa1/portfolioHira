<template>
  <div>
    <Head>
      <Title>hiraiwa portfolio</Title>
      <Meta name="description" content="hiraiwa portfolio サイト"></Meta>
    </Head>
    <div class="mainview">
      <h1 class="mainview__title slide" ref="observe_element">
        <img src="/images/name.png" alt="平岩 一樹" />
      </h1>
    </div>
  </div>
</template>

<script setup>

definePageMeta({
  pageTransition: { name: 'page', mode: 'out-in' },
})

const observe_element = ref();

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if(entry && entry.isIntersecting) {
        entry.target.classList.add("is-inview");
      }
    },
    {
      root: null,
      threshold: 1.0
    }
  );

  observer.observe(observe_element.value)
})
</script>

<style>
.page-leave-active {
  transition: all 0.4s ease;
}
</style>