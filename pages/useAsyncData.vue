<script setup>
  // https://nuxt.com/docs/getting-started/seo-meta#types


  // === Composables ===
  const utility = useUtility(import.meta);


  const url = 'https://api.coincap.io/v2/assets';
  // const url = 'https://api.github.com/meta';
  const { data, pending, error, refresh } = useAsyncData(
    'data',
    () => $fetch(url)
  );
</script>

<template>
  <span>
    <h1>{{ utility.currentFileName.split('.')[0] }}</h1>

    <button @click="refresh">Refresh</button>

    <ul v-if="!pending && !error">
      <li v-for="asset in data.data" :key="asset.id">
        Symbol: {{ asset.symbol }} | name: {{ asset.name }}
      </li>
    </ul>
    <p v-if="pending">Loading...</p>
    <p v-if="error">Error: {{ error.message }}</p>
  </span>
</template>
