// To call: /api/hello
// https://nuxt.com/docs/guide/directory-structure/server
export default defineEventHandler((event) => {
  return {
    hello: 'world',
  };
});
