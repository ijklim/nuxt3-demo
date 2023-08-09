<script setup>
  // https://nuxt.com/docs/getting-started/configuration
  // Environment variables from `/nuxt.config.ts`
  const runtimeConfig = useRuntimeConfig();
  // const runtimeConfig = 'static value';

  // Application configurations from `/app.config.ts`
  const appConfig = useAppConfig();
</script>

<template>
  <h1>{{ appConfig.appName }}</h1>

  <p><strong>runtimeConfig</strong>:</p>

  <!-- Note: Printing whole object will produce warning `[Vue warn]: Hydration text content mismatch in <pre>:` -->
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
