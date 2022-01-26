<template>
  <section id="skills" class="section skills">
    <div class="section__inner">
      <h2 class="section__title slide"><span>~ Skills ~</span></h2>
    </div>
    <div class="skills-content">
      <div class="section__inner skills__inner">
        <div class="skills__img slide">
          <img src="~/static/images/skill-img_1.jpg" alt="skillイメージ" />
        </div>
        <div class="skills__list slide">
          <ul>
            <li class="skills__item">
              <i class="fab fa-html5"></i>
              <div class="skills__item-title">HTML</div>
            </li>
            <li class="skills__item">
              <i class="fab fa-css3-alt"></i>
              <div class="skills__item-title">CSS</div>
            </li>
            <li class="skills__item">
              <i class="fab fa-sass"></i>
              <div class="skills__item-title">Sass</div>
            </li>
            <li class="skills__item">
              <i class="fab fa-js-square"></i>
              <div class="skills__item-title">jQuery</div>
            </li>
            <li class="skills__item">
              <img
                src="~/static/images/jq_1.png"
                alt="jQuery"
                class="skills__item-img"
              />
              <div class="skills__item-title">jQuery</div>
            </li>
            <li class="skills__item">
              <i class="fab fa-wordpress-simple"></i>
              <div class="skills__item-title">WordPress</div>
            </li>
            <li class="skills__item">
              <i class="fab fa-gulp"></i>
              <div class="skills__item-title">gulp</div>
            </li>
            <li class="skills__item">
              <img
                src="~/static/images/webpack_1.png"
                alt="webpack"
                class="skills__item-img"
              />
              <div class="skills__item-title">webpack</div>
            </li>
            <li class="skills__item">
              <img
                src="~/static/images/ps_1.png"
                alt="PhotoShop"
                class="skills__item-img"
              />
              <div class="skills__item-title">PhotoShop</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "skills",
  head: {
    script: [
      {
        src: "https://kit.fontawesome.com/59e1511a79.js",
      },
    ],
  },
};
</script>
