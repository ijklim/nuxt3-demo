<script setup>
  const routerLinks = [
    { url: '/', name: 'Home' },
    { url: '/configs', name: 'Configs' },
    { url: '/fetch', name: 'Fetch' },
    { url: '/image', name: 'Image' },
    { url: '/importMeta', name: 'ImportMeta' },
    { url: '/layout', name: 'Layout' },
    { url: '/products/5', name: 'Product: 5' },
    { url: '/products/118', name: 'Product: 118' },
    { url: '/products/error', name: 'Product: error' },
    { url: '/useHead', name: 'useHead' },
    { url: '/useSeoMeta', name: 'useSeoMeta' },
    { url: '/useState', name: 'useState' },
    { url: '/useState2', name: 'useState2' },
  ];
</script>

<template>
  <div class="links">
    <NuxtLink
      v-for="routerLink in routerLinks"
      :key="routerLink.name"
      :to="routerLink.url"
    >
      {{ routerLink.name }}
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
  /* Be careful with x margin, could cause unnecessary horizontal scroll bar */
  .links {
    margin: 10px 0px;
    text-align: center;
    width: 100%;

    a {
      margin: 0px 10px;
    }
  }
</style>
