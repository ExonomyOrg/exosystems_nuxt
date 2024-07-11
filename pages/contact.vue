<!-- pages/contact.vue -->

<template>
    <div>
        <Navbar />
      <h1>Contact Us</h1>
      <p>We value your input and inquiries. Please feel free to reach out to our team:</p>
      <ul>
        <li>Tamir Halperin: <a href="mailto:tamir@exosystems.net">tamir@exosystems.net</a></li>
        <li>Sanjay Kohli: <a href="mailto:sanjay@exosystems.net">sanjay@exosystems.net</a></li>
      </ul>
      <p>We look forward to hearing from you and discussing how we can collaborate to build a decentralized future.</p>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/navbar.vue'; 

  export default {
    head() {
      return {
        title: 'Contact Us - ExoSystems',
        meta: [
          { hid: 'description', name: 'description', content: 'Contact us at ExoSystems to discuss collaborations and inquiries.' }
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  /* Your scoped styles here */
  </style>
  