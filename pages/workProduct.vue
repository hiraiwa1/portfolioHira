<template>
  <div>
    <Head>
      <Title>hiraiwa portfolio : work productページ</Title>
      <Meta name="description" content="hiraiwa portfolio : work productページ"></Meta>
    </Head>
    <section id="works" class="section works">
      <div class="section__inner">
        <div class="section__title slide"><span>~ Works ~</span></div>
        <p class="section__text works__title-text">
          自身で制作した作品のいくつかです。<br>
          最初の3つはコーダーになる前、<br>
          それ以後はコーダーになった後の作品です。
        </p>
        <p class="section__text">順：古→新</p>
      </div>
      <div class="works-content">
        <div class="section__inner works__inner">
          <!-- /.works__item -->
          <div
            v-for="item in workProducts"
            :key="item.id"
            class="works__item slide"
          >
            <a
              :href="[item.url]"
              class="works__img-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="works__img"
                :src="`/images/works/${item.img}`"
                alt=""
              />
            </a>
            <div class="works__box">
              <p class="works__item-title" v-html="item.text"></p>
            </div>
          </div>
          <!-- /.works__item -->
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
    pageTransition: { name: 'page', mode: 'out-in' },
});

const workProductInit = [
  {
    id: 1,
    url: "https://bikeking-2929.netlify.app/",
    img: "work-01.png",
    text: "デザインからコーディングまで自作"
  },
  {
    id: 2,
    url: "https://nantocompacy-059b08.netlify.app/",
    img: "work-02.png",
    text: "デザインからコーディングまで自作"
  },
  {
    id: 3,
    url: "https://moveheart.netlify.app/",
    img: "work-04.png",
    text: `<a class="works__item-title--link" target="_blank"
            href="https://twitter.com/asuma_project" rel="noopener noreferrer">
            あすまさん</a>のデザインカンプ`
  },
  {
    id: 4,
    url: "https://cube-camera.vercel.app/",
    img: "work-06.jpg",
    text: "【Three.js】コーディング"
  },
  {
    id: 5,
    url: "https://spectacular-naiad-1a5604.netlify.app/",
    img: "work-07.jpg",
    text: "【Vue.js, Three.js】コーディング"
  },
  {
    id: 6,
    url: "https://deckgl-weather.netlify.app/",
    img: "work-08.png",
    text: "【Deck.gl, Vanilla JS】コーディング"
  }
];
const workProducts = ref(workProductInit);
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}
.page-enter-from {
  transform: translateX(-100vw);
  opacity: 0;
  filter: blur(1rem);
}

.page-leave-to {
  transform: translateX(100vw);
  opacity: 0;
  filter: blur(1rem);
}
</style>