<template>

  <div v-cloak>
    <Navbar />
    <slot />
  </div>

</template>

<style>
[v-cloak] {
  display: none;
}
</style>