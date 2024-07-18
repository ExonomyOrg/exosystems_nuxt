<template>
  <Navbar />
  <div style="margin-left: 15%; margin-top: 5% ;margin-right: 15%;">
    <h2>Volunteer Intern Information</h2>
    <p>We are delighted to extend an offer for you to join Exosystems as a Volunteer Intern. We are thrilled to have passionate and talented individuals like you to assist us in developing our pioneering applications, Exonomy and Exocracy, which are positioned to revolutionize sovereign peer-to-peer commerce and social media autonomy.</p>
    <p>At Exosystems, we envision a world without centralized control over our commercial interactions and social relationships. We are committed to building a future where each individual is the center of their own world, free from the constraints of the current corporate-driven digital landscape. Our mission is to create technology that empowers users with true sovereignty and autonomy.</p>
    <p>About Exosystems:</p>
    <ul>
      <li><strong>Exonomy:</strong> A groundbreaking application that allows users to publish personal vouchers as a form of payment, alongside cash and cryptocurrency. This decentralized approach aims to stimulate local economies and provide alternatives when traditional currencies are insufficient.</li>
      <li><strong>Exocracy:</strong> An innovative solution to replace anti-social media platforms with a decentralized system that prioritizes user privacy and autonomy, breaking free from the for-profit silos of the highly commercialized private data industry.</li>
    </ul>
    <p>We believe that with your help, we can develop these applications to their full potential, ensuring they function without the need for centralized servers or even internet access. Your role as a Volunteer Intern will be crucial in designing and implementing the P2P networking and content sharing technologies that form the backbone of our systems.</p>
    <p>You can help us by assisting in the development and testing of our innovative Exonomy and Exocracy applications. You'll be collaborating with the rest of our development team to design cutting edge P2P networking solutions and contribute to the creation of a decentralized environment for global deployment, ensuring data availability and high scalability within the user community.</p>
    <p>What We Offer is an opportunity to work on cutting-edge technology with a passionate and visionary team. You'll acquire hands-on experience in developing decentralized applications. This comes with mentorship and guidance from experienced professionals in the field and it all happens in a collaborative and inclusive work environment.</p>
    <p>Our ideal candidates have a keen interest in decentralized technologies and peer-to-peer networking. It helps to have a working understanding of software development and the Javascript programming language. Experience with additional technologies, especially those listed in the application form you’ll fill out, is also desired. Are you willingness to learn new design philosophies and contribute creatively to innovative projects. Then bring along your strong problem-solving skills and proactive attitude.</p>
    <p>We believe that your skills and enthusiasm will be a valuable addition to our team. By joining Exosystems, you will play a significant role in shaping the future of decentralized commerce and social media. Together, we can create a world where technology serves the people, and not the other way around.</p>
    <p>If you are ready to embark on this exciting journey with us, start off by reading our <NuxtLink to="/exonomy-design">Design Document</NuxtLink> and, if you're still interested, please fill out the Google form and we’ll get back to you soon. We look forward to welcoming you to Exosystems and working together to build the future.</p>
    <p>Sincerely,</p>
    <p>Tamir Halperin<br>Exonomist Executive<br>Exosystems</p>

    <h1>Internship Opportunities</h1>
    <p>Join our dynamic team and contribute to groundbreaking projects in decentralized technologies. We offer exciting internship positions for talented individuals:</p>
    
    <h2>1. Full Stack Developer Intern</h2>
    <p>We're seeking a passionate full stack developer intern to help build our cutting-edge applications. You'll work on both front-end and back-end development, gaining invaluable experience in decentralized technologies.</p>
    <p><a href="https://forms.gle/joQVuHCTtTJFhXhW9" target="_blank" rel="noopener noreferrer" class="button">Apply Now</a></p>
    
    <h2>2. Graphic Designer Intern</h2>
    <p>We're looking for a creative graphic designer intern to help shape the visual identity of our exo applications. You'll work on user interfaces, branding, and marketing materials for our innovative products.</p>
    <p><a href="https://forms.gle/RrkSurYtBbYuPazX6" target="_blank" rel="noopener noreferrer" class="button">Apply Now</a></p>
    
    <h2>3. Marketing Intern</h2>
    <p>We're in search of an enthusiastic marketing intern to help us promote our innovative applications and reach a broader audience. You'll assist in creating and executing marketing strategies, social media campaigns, and more.</p>
    <p><a href="https://forms.gle/YOUR_MARKETING_FORM_LINK" target="_blank" rel="noopener noreferrer" class="button">Apply Now</a></p>

    <p>Join us in our mission to revolutionize digital interactions and be part of the future of technology!</p>
    
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';

export default {
  components: {
    Navbar
  },
  head() {
    return {
      title: 'Internship Opportunities - ExoSystems',
      meta: [
        { hid: 'description', name: 'description', content: 'Explore internship opportunities at ExoSystems in full stack development, graphic design, and marketing.' }
      ]
    };
  }
}
</script>

<style scoped>
.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}
</style>
