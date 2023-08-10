<script setup>
  const appConfig = useAppConfig();

  const description = ref('Initial description');

  definePageMeta({
    layout: 'header-and-footer', // Specify the layout name
  });

  // https://nuxt.com/docs/api/composables/use-seo-meta
  // Parameters: https://github.com/harlan-zw/zhead/blob/main/src/metaFlat.ts
  useSeoMeta({
    title: `About Us | ${appConfig.appName}`,
    ogTitle: `About Us configured using useSeoMeta()`,
    // Note: Use computed getter syntax (() => value) for reactive tags
    ogDescription: () => description.value,
  });

  setTimeout(() => {
    description.value = 'New description set using useSeoMeta()';
  }, 5000);
</script>

<template>
  <Head>
    <Meta name="description" content="About Us description set in the template" />
  </Head>

  <h1>About Us</h1>

  <img src="~/assets/img/baby-hippo.jpg" alt="Baby Hippo">
</template>