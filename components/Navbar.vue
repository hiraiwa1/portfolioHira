<template>
  <header class="header">
    <nav class="header__inner" :class="{ 'is-open': isOpen }">
      <ul class="header__menu">
        <li
          class="header__menu-item"
          v-for="item in navList"
          :key="item.id"
        >
          <NuxtLink
            class="header__menu-link"
            :to="`${item.link}`"
            @click="isOpen = false"
           >
            {{ item.text }}
          </NuxtLink>
        </li>
      </ul>
      <div class="toggle" @click="clickHandle">
        <span class="toggle__span"></span>
        <span class="toggle__span"></span>
        <span class="toggle__span"></span>
      </div>
    </nav>
  </header>
</template>

<script setup>

const isOpen = ref(false);
const clickHandle = () => {
  if(isOpen.value) {
    isOpen.value = false;
  } else {
    isOpen.value = true;
  }
}

const navItemsInit = [
  {
    id: 1,
    link: "/",
    text: "Top"
  },
  {
    id: 2,
    link: "/about",
    text: "About"
  },
  {
    id: 3,
    link: "/skills",
    text: "Skills"
  },
  {
    id: 4,
    link: "/workProduct",
    text: "Work Product"
  },
];
const navList = ref(navItemsInit);
</script>