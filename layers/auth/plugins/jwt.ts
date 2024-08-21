// plugins/myPlugin.js
export default defineNuxtPlugin((nuxtApp) => {
  // Inject a custom function globally
  nuxtApp.provide('myFunction', () => {
    console.log('This is my custom function!');
  });

  // You can also access other Nuxt context properties like app, store, etc.
  // Example: console.log(nuxtApp.$router)
});
