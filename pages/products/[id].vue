<script setup>
  const route = useRoute();

  definePageMeta({
    // Dynamic Transitions: https://nuxt.com/docs/getting-started/transitions#dynamic-transitions
    pageTransition: {
      name: 'slide-right',
      mode: 'out-in',
    },
    middleware (to, from) {
      to.meta.pageTransition.name = +to.params.id > +from.params.id ? 'slide-left' : 'slide-right';
    },
    validate: async (route) => {
      return /^\d+$/.test(route.params.id);
    },
  });
</script>

<template>
  <span>
    <h1>Product Page, id: {{ route.params.id }}</h1>

    <p>Using custom page transition and middleware (<code>definePageMeta::pageTransition & ::middleware</code>)</p>

    <p>Validating route param (<code>definePageMeta::validate</code>)</p>
  </span>

</template>

<style scoped>
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: all 0.2s;
  }
  .slide-left-enter-from {
    opacity: 0;
    transform: translate(50px, 0);
  }
  .slide-left-leave-to {
    opacity: 0;
    transform: translate(-50px, 0);
  }
  .slide-right-enter-from {
    opacity: 0;
    transform: translate(-50px, 0);
  }
  .slide-right-leave-to {
    opacity: 0;
    transform: translate(50px, 0);
  }
</style>