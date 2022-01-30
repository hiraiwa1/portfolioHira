<template>
  <header class="header">
    <div class="header__inner" :class="{ 'is-open': isOpen }">
      <ul class="header__menu">
        <li class="header__menu-item">
          <nuxt-link
            class="header__menu-link"
            to="/"
            v-on:click.native="isOpen = false"
            >Top</nuxt-link
          >
        </li>
        <li class="header__menu-item">
          <nuxt-link
            class="header__menu-link"
            to="/about/"
            v-on:click.native="isOpen = false"
            >About</nuxt-link
          >
        </li>
        <li class="header__menu-item">
          <nuxt-link
            class="header__menu-link"
            to="/skills/"
            v-on:click.native="isOpen = false"
            >Skills</nuxt-link
          >
        </li>
        <li class="header__menu-item">
          <nuxt-link
            class="header__menu-link"
            to="/workProduct/"
            v-on:click.native="isOpen = false"
            >Work Product</nuxt-link
          >
        </li>
      </ul>
      <div class="toggle" v-on:click="isOpen = !isOpen">
        <span class="toggle__span"></span>
        <span class="toggle__span"></span>
        <span class="toggle__span"></span>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
