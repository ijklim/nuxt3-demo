<script setup>
  const { data } = await useFetch('http://api.open-notify.org/astros.json')
</script>

<template>
  <span>
    <strong>Fetching data using `useFetch()`:</strong>

    <pre>
      {{ data }}
    </pre>
  </span>
</template>