<script setup>
  const appConfig = useAppConfig();

  // https://nuxt.com/docs/getting-started/seo-meta#types
  useHead({
    bodyAttrs: {
      class: 'class-test',
    },
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Borel&display=swap',
      },
    ],
    meta: [
      { name: 'Home Page', },
      { description: 'Put more information here...', },
    ],
    script: [
      { innerHTML: 'console.log("Hello About Us!")' },
    ],
    title: appConfig.appName,
  });
</script>

<template>
  <div>
    <!-- Note: Need single root element to prevent transition warning -->
    <h1 style="font-family:Borel;">Home Page</h1>

    <!-- Auto import Main.vue from folder `/components` -->
    <AppMain />
  </div>
</template>
