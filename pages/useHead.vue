<script setup>
  // https://nuxt.com/docs/getting-started/seo-meta#types
  useHead({
    bodyAttrs: {
      class: 'class-test',
    },
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Borel&display=swap',
      },
    ],
    meta: [
      { name: 'Page useHead', },
      { description: 'Put more information here...', },
    ],
    script: [
      { innerHTML: 'console.log("Hello useHead!")' },
    ],
    title: 'useHead',
  });
</script>

<template>
  <span>
    <h1 style="font-family:Borel;">useHead</h1>

    <p>Check meta name, description, console log, stylesheet changing h1 font, title, class <code>class-test</code> added to <code>&lt;body></code></p>
  </span>
</template>