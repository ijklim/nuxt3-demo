<script setup>
  const appConfig = useAppConfig();
  const route = useRoute();

  // https://nuxt.com/docs/getting-started/seo-meta#title-template
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - ${appConfig.appName}` : appConfig.appName;
    },
  });

  // Note: Only trigger once during page load
  watch(route, (value) => {
    // console.log('[app.vue::watch::route] value.[fullPath, params]:', value.fullPath, value.params);
  }, {
    deep: true,
    immediate: true,
  });

  // Note: Will trigger most consistently when `route.path` is referenced
  watchEffect(() => {
    // console.log('[app.vue::watchEffect] route.[fullPath, path, params]:', route.fullPath, route.path, route.params);
  });
</script>

<template>
  <NuxtLayout>
    <!-- components/RouterLinks.vue -->
    <!-- <RouterLinks /> -->

    <div style="font-size:0.8rem; padding:5px;">Using <code>useHead::titleTemplate</code> to add suffix to title</div>

    <div class="content">
      <!-- https://nuxt.com/docs/api/components/nuxt-page -->
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
