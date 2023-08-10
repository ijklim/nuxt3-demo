<script setup>
  const appConfig = useAppConfig();

  // https://nuxt.com/docs/getting-started/seo-meta#types
  useHead({
    title: appConfig.appName,
    meta: [
      { name: 'Home Page', },
      { description: 'Put more information here...', },
    ],
    bodyAttrs: {
      class: 'class-test',
    },
    script: [
      { innerHTML: 'console.log("Hello About Us!")' },
    ],
  });
</script>

<template>
  <h1>Home Page</h1>

  <div>
    <!-- Auto import Main.vue from folder `/components` -->
    <AppMain />
  </div>
</template>
