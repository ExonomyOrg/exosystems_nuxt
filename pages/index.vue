<template>
  <Navbar />
  <div style="margin-left: 15%; margin-top: 5% ;margin-right: 15%;">
    <h1>Welcome to ExoSystems</h1>
    <p>ExoSystems is a pioneering company dedicated to building innovative exo applications. Our flagship projects, Exonomy and Exocracy, are designed to revolutionize peer-to-peer commerce and social media autonomy.</p>
    <p>We're committed to creating a future of decentralized, sovereign interactions in both commercial and social spheres. Join us in shaping the future of digital interactions.</p>
    <nuxt-link to="/internship" class="button">Explore Opportunities</nuxt-link>
    <GoogleSignInButton
  @success="handleLoginSuccess"
  @error="handleLoginError"
/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/navbar.vue';
import { GoogleSignInButton, type CredentialResponse } from "vue3-google-signin";

export default defineComponent({
  components: {
    Navbar,
    GoogleSignInButton,
  },
  methods: {
    async handleLoginSuccess(response: CredentialResponse) {
      const { credential } = response;
      console.log("Access Token", credential);

      // Call the server-side API route
      try {
        const res = await fetch('/api/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ credential, provider: 'google' }),
        });
        if (res) {
          console.log('Authentication successful');
        } else {
          console.error('Authentication failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
    handleLoginError() {
      console.error("Login failed");
    }
  },
  head() {
    return {
      title: 'ExoSystems - Home',
      meta: [
        { hid: 'description', name: 'description', content: 'Welcome to ExoSystems. Explore our innovative projects like Exonomy and Exocracy.' }
      ]
    };
  }
});
</script>


<style scoped>
/* Your scoped styles here */
.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
}
</style>
