<template>
  <Navbar />
  <div style="margin-left: 15%; margin-top: 5%; margin-right: 15%;">
    <h1>Welcome to ExoSystems</h1>
    <p>ExoSystems is a pioneering company dedicated to building innovative exo applications. Our flagship projects, Exonomy and Exocracy, are designed to revolutionize peer-to-peer commerce and social media autonomy.</p>
    <p>We're committed to creating a future of decentralized, sovereign interactions in both commercial and social spheres. Join us in shaping the future of digital interactions.</p>
    <nuxt-link to="/internship" class="button">Explore Opportunities</nuxt-link>

    <!-- Login Button on the right-hand side -->
    <button class="login-button" @click="togglePanel">Login</button>

    <!-- Background Overlay -->
    <div v-if="isPanelVisible" class="overlay" @click="closePanel"></div>

    <!-- Sliding Panel -->
    <div :class="['sliding-panel', isPanelVisible ? 'open' : 'closed']" @click.stop>
      <div class="panel-content">
        <!-- Google Sign-In Button -->
        <GoogleSignInButton @success="handleLoginSuccess" @error="handleLoginError" />
        <button class="panel-button">Login with GitHub</button>
        <button class="panel-button">Login with MetaMask</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/navbar.vue';
import { GoogleSignInButton, type CredentialResponse } from "vue3-google-signin";

export default defineComponent({
  components: {
    Navbar,
    GoogleSignInButton,
  },
  data() {
    return {
      isPanelVisible: false, // Track visibility of the panel
    };
  },
  methods: {
    togglePanel() {
      this.isPanelVisible = !this.isPanelVisible; // Toggle panel visibility
    },
    closePanel() {
      this.isPanelVisible = false; // Close the panel
    },
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
        if (res.ok) {
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
/* General Button Styles */
.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
}

/* Login Button (Right Side) */
.login-button {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1001; /* Ensure it's above other elements */
  display: block; /* Ensure the button is visible */
}

/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999; /* Behind the panel, but above other content */
}

/* Sliding Panel Styles */
.sliding-panel {
  position: fixed;
  top: 50%; /* Centered vertically */
  right: -300px;
  width: 300px;
  height: 200px; /* Height enough for the three buttons */
  transform: translateY(-50%); /* Adjust for centering */
  background-color: rgba(116, 115, 118, 0.2); /* Slightly transparent background */
  transition: right 0.3s ease-in-out;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.sliding-panel.open {
  right: 0; /* When panel is open, show it */
}

.sliding-panel.closed {
  right: -300px; /* When panel is closed, hide it */
}

/* Panel Content */
.panel-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.panel-button {
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
