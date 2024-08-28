<script lang="ts" setup>
import { useRoute } from 'vue-router';

// === Composables ===
const $route = useRoute();

const pages = computed(() => {
  return $route.matched[0].children.filter(({ name }) => name !== 'ztest-ivan-name-name');
});
</script>

<template>
  <!-- <pre>$route.matched {{ $route.matched }}</pre>
  <pre>pages {{ pages }}</pre> -->

  <div class="nuxtlinks">
    <NuxtLink
      v-for="page in pages"
      :key="page.path"
      class="nuxtlink"
      :to="`/${page.path}`"
    >
      {{ page.path }}
    </NuxtLink>
  </div>
</template>

<style scoped>
.nuxtlinks {
  border-bottom: 1px solid #393;
  line-height: normal;
  margin-bottom: 5px;;
}

.nuxtlink {
  display: inline-block;
  font-size: 1.2rem;
  width: calc(100% / 8);
}
</style>