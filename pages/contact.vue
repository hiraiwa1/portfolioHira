<template>
  <section id="contact" class="section contact">
    <div class="section__inner">
      <h2 class="section__title slide" ref="observe_element">
        <span>~ Contact ~</span>
      </h2>
    </div>
    <div class="section__inner">
      <form
        action="form/php/mailform.php"
        method="post"
        id="mail_form"
        class="contact__form"
      >
        <dl>
          <dt class="contact__form-label">会社名<span>Company Name</span></dt>
          <dd class="contact__form-item">
            <input type="text" id="company" name="company" value="" />
          </dd>

          <dt class="contact__form-label">名前<span>Your Name</span></dt>
          <dd class="required contact__form-item name">
            <input type="text" id="name_1" name="name_1" value="" />
            <input type="text" id="name_2" name="name_2" value="" />
          </dd>

          <dt class="contact__form-label">ふりがな<span>Name Reading</span></dt>
          <dd class="contact__form-item name">
            <input type="text" id="read_1" name="read_1" value="" />
            <input type="text" id="read_2" name="read_2" value="" />
          </dd>

          <dt class="contact__form-label">
            メールアドレス<span>Mail Address</span>
          </dt>
          <dd class="required contact__form-item">
            <input
              type="email"
              id="mail_address"
              name="mail_address"
              value=""
            />
          </dd>

          <dt class="contact__form-label">
            メールアドレス(確認用)<span>Mail Address Confirm</span>
          </dt>
          <dd class="contact__form-item">
            <input
              type="email"
              id="mail_address_confirm"
              name="mail_address_confirm"
              value=""
            />
          </dd>

          <dt class="contact__form-label">郵便番号<span>Postal</span></dt>
          <dd class="contact__form-item">
            <input
              type="text"
              id="postal"
              name="postal"
              value=""
              onkeyup="AjaxZip3.zip2addr( this,'','address','address' );"
            />　<a href="http://www.post.japanpost.jp/zipcode/" target="_blank"
              >郵便番号検索</a
            >
          </dd>

          <dt class="contact__form-label">住所<span>Address</span></dt>
          <dd class="contact__form-item">
            <input type="text" id="address" name="address" value="" />
          </dd>

          <dt class="contact__form-label">電話番号<span>Phone Number</span></dt>
          <dd class="contact__form-item">
            <input type="tel" id="phone" name="phone" value="" />
          </dd>

          <dt class="contact__form-label">
            お問い合わせの種類<span>Inquiry Kind</span>
          </dt>
          <dd class="contact__form-serect">
            <ul>
              <li>
                <label
                  ><input
                    type="checkbox"
                    class="kind"
                    name="kind[]"
                    value="WEBサイトについて"
                  />WEBサイトについて</label
                >
              </li>
              <li>
                <label
                  ><input
                    type="checkbox"
                    class="kind"
                    name="kind[]"
                    value="お仕事について"
                  />お仕事について</label
                >
              </li>
              <li>
                <label
                  ><input
                    type="checkbox"
                    class="kind"
                    name="kind[]"
                    value="その他お問い合わせ"
                  />その他お問い合わせ</label
                >
              </li>
            </ul>
          </dd>

          <dt class="contact__form-label">
            返信方法のご希望<span>Response</span>
          </dt>
          <dd class="contact__form-serect">
            <ul>
              <li>
                <label
                  ><input
                    type="checkbox"
                    class="response"
                    name="response[]"
                    value="電話での返信を希望"
                  />電話での返信を希望</label
                >
              </li>
              <li>
                <label
                  ><input
                    type="checkbox"
                    class="response"
                    name="response[]"
                    value="メールでの返信を希望"
                  />メールでの返信を希望</label
                >
              </li>
              <li>
                <label
                  ><input
                    type="checkbox"
                    class="response"
                    name="response[]"
                    value="返信不要"
                  />返信不要</label
                >
              </li>
            </ul>
          </dd>

          <dt class="contact__form-label">
            お問い合わせの内容<span>Contents</span>
          </dt>
          <dd class="required contact__form-item textarea">
            <textarea id="mail_contents" name="mail_contents"></textarea>
          </dd>
        </dl>

        <p id="form_submit" class="contact__btn">
          <input type="button" id="form_submit_button" value="送信する" />
        </p>
      </form>
      <div id="form_success" class="contact__form-success">
        <p>お問い合わせありがとうございます。</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contact",
  head: {
    head: {
    title: 'hiraiwa portfolio contact',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'お問い合わせページ'
      },
    ],
  },
    script: [
      {
        src: "/contact/jquery-3.6.0.min.js",
        body: true,
      },
      {
        src: "/contact/js/mailform-js.php",
        body: true,
      },
      {
        src: "/contact/js/jquery.autoKana.js",
        body: true,
      },
      {
        src: "/contact/js/ajaxzip3.js",
        body: true,
      },
    ],
  },
  methods: {},
  plugins: [
    {
      src: "~/plugins/js/main.js",
    },
  ],
};
</script>
