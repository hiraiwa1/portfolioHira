<template>
  <section id="skills" class="section creamBg skills">
    <div class="section__inner">
      <h2 class="section__title slide"><span>~ Skills ~</span></h2>
    </div>
    <div class="skills-content">
      <div class="section__inner skills__inner">
        <div class="skills__img slide">
          <img src="/images/skill-img_1.jpg" alt="skillイメージ" />
        </div>
        <div class="skills__list slide">
          <ul>
            <li
              v-for="skill in skills"
              :key="skill.id"
              class="skills__item"
             >
              <img
                :src="`/images/icon/${skill.img}`"
                alt="webpack"
                class="skills__item-img"
              />
              <div class="skills__item-title">{{ skill.text }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillsInit = [
  {
    id: 1,
    img: "html5.svg",
    text: "HTML"
  },
  {
    id: 2,
    img: "css3-alt.svg",
    text: "CSS"
  },
  {
    id: 3,
    img: "sass.svg",
    text: "Sass"
  },
  {
    id: 4,
    img: "square-js.svg",
    text: "JavaScript"
  },
  {
    id: 5,
    img: "jq_1.png",
    text: "jQuery"
  },
  {
    id: 6,
    img: "ejs_icon.svg",
    text: "ejs"
  },
  {
    id: 7,
    img: "gulp.svg",
    text: "gulp"
  },
  {
    id: 8,
    img: "webpack_1.png",
    text: "webpack"
  },
  {
    id: 9,
    img: "vite.svg",
    text: "vite"
  },
  {
    id: 10,
    img: "vue_1.png",
    text: "Vue.js"
  },
  {
    id: 11,
    img: "ps_1.png",
    text: "PhotoShop"
  },
];
const skills = ref(skillsInit);
</script>