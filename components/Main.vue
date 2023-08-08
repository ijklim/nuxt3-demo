<script setup>
  const runtimeConfig = useRuntimeConfig();
</script>

<template>
  Information from environment variables:

  <pre>
    {{ runtimeConfig }}
  </pre>
</template>