<template>
  <div>
    <Head>
      <Title>hiraiwa portfolio : aboutページ</Title>
      <Meta name="description" content="hiraiwa portfolio : aboutページ"></Meta>
    </Head>
    <section id="about" class="section about">
      <div class="section__inner">
        <p class="about__text">
          平岩一樹のポートフォリオサイトです。<br />
          <br />
          勉強で作成したサイトを作品として「Work Product」にて<br />
          簡易的ではございますが掲載しております。<br>ご覧くださいませ。<br />
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
    pageTransition: { name: 'page', mode: 'out-in' },
})
</script>


<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}
.page-enter-from {
  transform: translateX(100vw);
  opacity: 0;
  filter: blur(1rem);
}
.page-leave-to {
  transform: translateX(-100vw);
  opacity: 0;
  filter: blur(1rem);
}
</style>