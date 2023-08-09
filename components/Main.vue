<script setup>
  // https://nuxt.com/docs/getting-started/configuration
  // Environment variables from `/nuxt.config.ts`
  const runtimeConfig = useRuntimeConfig();
  // const runtimeConfig = 'static value';

  // Application configurations from `/app.config.ts`
  const appConfig = useAppConfig();
</script>

<template>
  <p><strong>runtimeConfig</strong>:</p>

  <pre>
    {{ runtimeConfig }}
  </pre>

  <p><strong>$config</strong>:</p>

  <pre>
    {{ $config }}
  </pre>

  <p><strong>appConfig</strong>:</p>

  <pre>
    {{ appConfig }}
  </pre>
</template>