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
    <RouterLinks />

    <p style="font-size:0.8rem; padding:5px;">Using <code>useHead::titleTemplate</code> to add suffix to title</p>

    <div class="content">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
  .content {
    min-height: 80vh;
    padding: 10px;
  }
</style>
