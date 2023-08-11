<script setup>
  // https://nuxt.com/docs/getting-started/state-management
  const counter = useState('counter', () => Math.round(Math.random() * 1000));
</script>

<template>
  <span>
    <h1>useState</h1>

    <div>
      Counter: {{ counter }}

      <button @click="counter++">
        +
      </button>

      <button @click="counter--">
        -
      </button>
  </div>
  </span>
</template>

<style scoped>
  button {
    background-color: green;
    color: white;
    cursor: pointer;
    padding: 15px;
  }
</style>