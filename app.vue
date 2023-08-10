<script setup>
  const appConfig = useAppConfig();

  // https://nuxt.com/docs/getting-started/seo-meta#title-template
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - ${appConfig.appName}` : appConfig.appName;
    },
  });
</script>

<template>
  <NuxtLayout>
    <div class="content">
      <NuxtPage />
    </div>

    <div class="links">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/products/5">Product: 5</NuxtLink>
      <NuxtLink to="/products/118">Product: 118</NuxtLink>
      <NuxtLink to="/products/error">Product: error</NuxtLink>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
  .content {
    min-height: 80vh;
    padding: 10px;
  }

  .links {
    text-align: center;
    width: 100%;

    a {
      margin: 0px 10px;
    }
  }
</style>
