<script setup>
  // Application configurations from `/app.config.ts`
  const appConfig = useAppConfig();
</script>

<template>
  <header>
    <h1>{{ appConfig.appName }} <small>v.{{ appConfig.appVersion }}</small></h1>
  </header>
</template>

<style scoped>
  header {
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    color: white;
    margin: 0px;
    padding: 10px;
  }
</style>