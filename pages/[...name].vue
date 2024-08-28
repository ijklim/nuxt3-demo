<script lang="ts" setup>
// To run: http://localhost:2888
import { useRoute } from 'vue-router';
import PageLinks from './.components/PageLinks.vue';

// === Composables ===
const $route = useRoute();

const currentFolder = computed(() => {
  const pathSegments =  $route.path.split('/');
  // Remove last element
  pathSegments.splice(-1, 1);
  // Add initial folder `pages`
  pathSegments.unshift('pages');
  return pathSegments.filter(pathSegment => pathSegment.length > 0).join('/');
});
</script>

<template>
  <span>
    <!-- Note: Catch all page -->
    <h2>Nuxt Demo (with [...name]) v.1</h2>

    <PageLinks />

    <!-- Current Folder: {{ currentFolder }} -->

    <!-- Note: `path-component-folder` does not work as defineAsyncComponent does not work
               with unpredefined variables several levels deep -->
    <NuxtPage />
  </span>
</template>
