<script setup>
  // https://nuxt.com/docs/getting-started/configuration
  // https://masteringnuxt.com/blog/24-time-saving-tips-for-nuxt3#22: runtimeConfig values are hydrated on the client side during run-time, while app.config values are bundled during the build process.
  // Environment variables from `/nuxt.config.ts`
  const runtimeConfig = useRuntimeConfig();
  // const runtimeConfig = 'static value';
  // console.log('runtimeConfig', toRaw(runtimeConfig));

  // Application configurations from `/app.config.ts`
  const appConfig = useAppConfig();
  // console.log('appConfig from `app.config.ts`', toRaw(appConfig));
</script>

<template>
  <span>
    <h1>{{ appConfig.appName }}</h1>

    <p><strong>runtimeConfig.public</strong> (runtimeConfig from `nuxt.config.ts::runtimeConfig`):</p>

    <!-- Note: Printing whole object will produce warning `[Vue warn]: Hydration text content mismatch in <pre>:` -->
    <pre>{{ runtimeConfig.public }}</pre>

    <p><strong>$config.app ($config similar to runtimeConfig)</strong>:</p>

    <pre>{{ $config.app }}</pre>

    <p><strong>appConfig</strong> (from app.config.ts):</p>

    <pre>{{ appConfig }}</pre>
  </span>
</template>
