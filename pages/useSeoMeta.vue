<script setup>
  const appConfig = useAppConfig();

  const description = ref('Initial description (should be changed)');

  // https://nuxt.com/docs/api/composables/use-seo-meta
  // Parameters: https://github.com/harlan-zw/zhead/blob/main/src/metaFlat.ts
  useSeoMeta({
    title: `useSeoMeta | ${appConfig.appName}`,
    ogTitle: `Meta configured using useSeoMeta()`,
    // Note: Use computed getter syntax (() => value) for reactive tags
    ogDescription: () => description.value,
  });

  setTimeout(() => {
    description.value = 'New description set by useSeoMeta::ogDescription linking to ref';
  }, 5000);
</script>

<template>
  <span>
    <Head>
      <Meta name="description" content="Description set in the template <Head>" />
    </Head>

    <h1>useSeoMeta</h1>

    <p>Setting meta using <code>useSeoMeta</code> and <code>&lt;Head></code></p>

    <p>Changing meta <code>description</code> using reactive ref</p>
  </span>
</template>