export default defineNuxtConfig({
    app: {
      head: {
        title: 'Exosystems',
        link: [
          { rel: 'icon', type: 'image/jpeg', href: '/favicon.jpg' }
        ]
      }
    },
    css: [
      '@/assets/global.css'
    ],
  });

