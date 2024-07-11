<!-- pages/internship.vue -->

<template>
    <div>
        <Navbar />
      <h1>Internship Opportunities</h1>
      <p>Join our dynamic team and contribute to groundbreaking projects in decentralized technologies. We offer exciting internship positions for talented individuals:</p>
      
      <h2>1. Full Stack Developer Intern</h2>
      <p>We're seeking a passionate full stack developer intern to help build our cutting-edge applications. You'll work on both front-end and back-end development, gaining invaluable experience in decentralized technologies.</p>
      <p><a href="https://forms.gle/joQVuHCTtTJFhXhW9" target="_blank" rel="noopener noreferrer" class="button">Apply Now</a></p>
      
      <h2>2. Graphic Designer Intern</h2>
      <p>We're looking for a creative graphic designer intern to help shape the visual identity of our exo applications. You'll work on user interfaces, branding, and marketing materials for our innovative products.</p>
      <p><a href="https://forms.gle/RrkSurYtBbYuPazX6" target="_blank" rel="noopener noreferrer" class="button">Apply Now</a></p>
      
      <p>Join us in our mission to revolutionize digital interactions and be part of the future of technology!</p>
    </div>
  </template>
  
  <script>
    import Navbar from '@/components/navbar.vue';

  export default {
    
    head() {
      return {
        title: 'Internship Opportunities - ExoSystems',
        meta: [
          { hid: 'description', name: 'description', content: 'Explore internship opportunities at ExoSystems in full stack development and graphic design.' }
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  /* Your scoped styles here */
  .button {
    /* Example button styling */
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
  }
  </style>
  