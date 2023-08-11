<script setup>
  // https://nuxt.com/docs/getting-started/state-management
  const counter = useState('counter');

  // useColor is auto imported from `composables/states.ts`
  const color = useColor();
</script>

<template>
  <span>
    <h1>useState 2</h1>

    <div>
      Counter from <code>useState.vue</code>: {{ counter }}
    </div>

    <div>Color from <code>/composables/states.ts</code>: {{ color }}</div>
  </span>
</template>
