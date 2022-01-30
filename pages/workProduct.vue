<template>
  <section id="works" class="section works">
    <div class="section__inner">
      <div class="section__title slide"><span>~ Works ~</span></div>
      <p class="section__text works__title-text">
        XDやPhotoShopのデザインカンプからの練習ーコーディングや自身でデザインからコーディングまでやった作品です。
      </p>
    </div>
    <div class="works-content">
      <div class="section__inner works__inner">
        <div class="works__item slide">
          <a
            href="https://bikeking-2929.netlify.app/"
            class="works__img-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="works__img"
              src="~/static/images/works/work-01.png"
              alt=""
            />
          </a>
          <div class="works__box">
            <p class="works__item-title">デザインからコーディングまで自作</p>
            <a
              class="works__item-link"
              href="https://github.com/hiraiwa1/bikeking"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="fab fa-github-square"></i
            ></a>
          </div>
        </div>
        <!-- /.works__item -->
        <div class="works__item slide">
          <a
            href="https://nantocompacy-059b08.netlify.app/"
            class="works__img-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="works__img"
              src="~/static/images/works/work-02.png"
              alt=""
            />
          </a>
          <div class="works__box">
            <p class="works__item-title">コーディングからデザインまで自作</p>
            <a
              class="works__item-link"
              href="https://github.com/hiraiwa1/nantoka_company"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="fab fa-github-square"></i
            ></a>
          </div>
        </div>
        <!-- /.works__item -->
        <div class="works__item slide">
          <a
            href="http://xs330034.xsrv.jp/"
            class="works__img-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="works__img img-blur"
              src="~/static/images/works/work-03.png"
              alt=""
            />
          </a>
          <div class="works__box">
            <p class="works__item-title">
              <a
                class="works__item-title--link"
                href="https://twitter.com/showheyohtaki"
                >デイトラのショーヘーさん</a
              >のデザインカンプ
            </p>
            <a
              class="works__item-link"
              href="https://github.com/hiraiwa1/md2020"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="fab fa-github-square"></i
            ></a>
          </div>
        </div>
        <!-- /.works__item -->
        <div class="works__item slide">
          <a
            href="https://moveheart.netlify.app/"
            class="works__img-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="works__img"
              src="~/static/images/works/work-04.png"
              alt=""
            />
          </a>
          <div class="works__box">
            <p class="works__item-title">
              <a
                class="works__item-title--link"
                href="https://twitter.com/asuma_project"
                >あすまさん</a
              >のデザインカンプ
            </p>
            <a
              class="works__item-link"
              href="https://github.com/hiraiwa1/MOVEHART"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="fab fa-github-square"></i
            ></a>
          </div>
        </div>
        <!-- /.works__item -->
        <div class="works__item slide">
          <a
            href="https://dev-www3.nhk.or.jp/news/special/practice_hiraiwa/nyanco/master/"
            class="works__img-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="works__img"
              src="~/static/images/works/work-05.png"
              alt=""
            />
          </a>
          <div class="works__box">
            <p class="works__item-title">にゃんこ課題</p>
          </div>
        </div>
        <!-- /.works__item -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: 'hiraiwa portfolio work product',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'my work product'
      },
    ],
  }
};
</script>
