<script setup>
  // https://nuxt.com/docs/getting-started/data-fetching
  const url = {
    a: 'https://jsonplaceholder.typicode.com/posts/1/comments',
    b: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
    c: 'http://api.open-notify.org/astros.json',
    d: 'https://picsum.photos/v2/list',
  };

  const id = ref(1);

  const { pending, data: comments } = useLazyFetch(url.a);

  // https://nuxt.com/docs/getting-started/data-fetching#minimize-payload-size
  const { data: quote, execute, refresh } = await useFetch(url.b, {
    pick: ['quoteText', 'quoteAuthor'],
    watch: [id],
  });


  let params = new URLSearchParams();
  params.append('limit', 2);
  params.append('page', 3);
  const dollarFetchData = await $fetch(`${url.d}?${params.toString()}`).catch((error) => error.data);
</script>

<template>
  <div style="margin-bottom:80px;">
    <div v-if="pending">
      useLazyFetch({{ url.a }})...
    </div>
    <div v-else>
      <div v-for="comment in comments">
        • {{ comment.id }}. {{ comment.body }}
      </div>
    </div>

    <strong>Fetching data using `useFetch({{ url.b }})`:</strong>

    <pre>{{ quote }}</pre>

    <div>
      <button @click="execute">Get New Quote using `refresh`</button> (failing due to cors issue)
    </div>

    <div>
      <button @click="id++">Id: {{ id }}</button> (fail as well, initial api call passes probably due to server render)
    </div>

    <strong>Fetching data using `$fetch({{ url.d }})`:</strong>

    <pre>{{ dollarFetchData }}</pre>
  </div>
</template>

<style scoped>
  pre {
    max-height: 200px;
    overflow-y: scroll;
  }

  button {
    background-color: green;
    color: white;
    cursor: pointer;
    padding: 5px;
  }
</style>