<script setup>
  const route = useRoute();

  definePageMeta({
    validate: async (route) => {
      return /^\d+$/.test(route.params.id);
    },
  });
</script>

<template>
  <h1>Product Page, id: {{ route.params.id }}</h1>
</template>
