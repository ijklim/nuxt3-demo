// https://nuxt.com/docs/getting-started/views
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    // This will be an object representation of the html template.
    // Note: Log output will be displayed on server, not client
    console.log('[server/plugins/extend-html.ts::defineNitroPlugin::nitroApp.hooks.hook::render:html] html', html);
    html.head.push(`<meta name="description" content="My custom description" />`);
  });

  // === You can also intercept the response here.
  nitroApp.hooks.hook('render:response', (response, { event }) => {
    console.log('[server/plugins/extend-html.ts::defineNitroPlugin::nitroApp.hooks.hook::render:response] response', response);
  });
});
