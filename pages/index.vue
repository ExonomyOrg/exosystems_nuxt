<template>
  <Navbar />
  <div style="margin-left: 15%; margin-top: 5%; margin-right: 15%;">
    <h1>Welcome to ExoSystems</h1>
    <p>ExoSystems is a pioneering company dedicated to building innovative exo applications. Our flagship projects, Exonomy and Exocracy, are designed to revolutionize peer-to-peer commerce and social media autonomy.</p>
    <p>We're committed to creating a future of decentralized, sovereign interactions in both commercial and social spheres. Join us in shaping the future of digital interactions.</p>
    <nuxt-link to="/internship" class="button">Explore Opportunities</nuxt-link>

    <!-- Conditional Button (Login/Logout) -->
    <button 
      class="auth-button"
      :style="{ backgroundColor: isLoggedIn() ? '#000' : '#007bff', color: isLoggedIn() ? '#fff' : '#fff' }"
      @click="toggleAuthPanel"
    >
      {{ isLoggedIn() ? 'Logout?' : 'Login?' }}
    </button>

    <!-- Background Overlay -->
    <div v-if="isPanelVisible || showLogoutPanel" class="overlay" @click="closePanel"></div>

    <!-- Login Sliding Panel -->
    <div :class="['sliding-panel', isPanelVisible && !showLogoutPanel ? 'open' : 'closed']" @click.stop>
      <div class="panel-content">
        <!-- Google Sign-In Button -->
        <div :class="{ 'active': isLoggedIn('google') }" :style="{ opacity: isLoggedIn('google') ? 0.5 : 1 }">
          <GoogleSignInButton
            @success="handleLoginSuccess"
            @error="handleLoginError"
          />
        </div>
        <button
          @click="loginWithGitHub"
          class="panel-button white-button"
          :class="{ 'active': isLoggedIn('github') }"
          :disabled="isLoggedIn('github')"
        >
          Login with GitHub
          <img src="/assets/github-logo.svg" alt="GitHub Logo" class="logo" />
        </button>
        <button
          @click="loginWithMetaMask"
          class="panel-button white-button"
          :class="{ 'active': isLoggedIn('metamask') }"
          :disabled="isLoggedIn('metamask')"
        >
          Login with MetaMask
          <img src="/assets/metamask-logo.svg" alt="MetaMask Logo" class="logo" />
        </button>
      </div>
    </div>

    <!-- Logout Sliding Panel -->
    <div :class="['sliding-panel', showLogoutPanel ? 'open' : 'closed']" @click.stop>
      <div class="panel-content">
        <button
          @click="handleLogout('google')"
          class="panel-button black-button"
          :disabled="!isLoggedIn('google')"
          :class="{ 'disabled': !isLoggedIn('google') }"
        >
          Logout from Google
          <img src="/assets/google-logo.svg" alt="Google Logo" class="logo" />
        </button>
        <button
          @click="handleLogout('github')"
          class="panel-button black-button"
          :disabled="!isLoggedIn('github')"
          :class="{ 'disabled': !isLoggedIn('github') }"
        >
          Logout from GitHub
          <img src="/assets/github-logo.svg" alt="GitHub Logo" class="logo" />
        </button>
        <button
          @click="handleLogout('metamask')"
          class="panel-button black-button"
          :disabled="!isLoggedIn('metamask')"
          :class="{ 'disabled': !isLoggedIn('metamask') }"
        >
          Logout from MetaMask
          <img src="/assets/metamask-logo.svg" alt="MetaMask Logo" class="logo" />
        </button>
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
      showLogoutPanel: false, // Track visibility of the logout panel
    };
  },
  methods: {
    // Check if running on the client-side
    isClient() {
      return process.client;
    },

    isLoggedIn(provider?: string): boolean {
      if (!this.isClient()) {
        return false; // Or some default value if running on the server
      }

      if (provider) {
        return !!localStorage.getItem(`${provider}_token`);
      }
      // Check if any provider token exists
      return !!localStorage.getItem('google_token') || !!localStorage.getItem('github_token') || !!localStorage.getItem('metamask_token');
    },

    toggleAuthPanel() {
      if (this.isLoggedIn()) {
        this.showLogoutPanel = !this.showLogoutPanel;
      } else {
        this.isPanelVisible = !this.isPanelVisible;
      }
    },
    closePanel() {
      this.isPanelVisible = false;
      this.showLogoutPanel = false;
    },
    async handleLoginSuccess(response: CredentialResponse) {
      const { credential } = response;
      console.log("Access Token", credential);

      try {
        const res = await fetch('/api/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ credential, provider: 'google' }),
        });
        if (res.ok) {
          if (this.isClient()) {
            localStorage.setItem('google_token', credential);
          }
          console.log('Authentication successful');
          this.closePanel(); // Close panel on successful login
        } else {
          console.error('Authentication failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
    handleLoginError() {
      console.error("Login failed");
    },
    loginWithGitHub() {
      const clientId = 'Ov23li5X8H4A6wPKPTuR'; // Replace with your GitHub client ID
      const redirectUri = 'http://localhost:3000/auth/callback/github'; // Replace with your actual callback URL
      const scope = 'repo user';
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

      window.location.href = authUrl; // Redirect user to GitHub OAuth URL
    },
    loginWithMetaMask() {
      // Your MetaMask login logic here
    },
    handleLogout(provider: string) {
      if (this.isLoggedIn(provider)) {
        if (this.isClient()) {
          localStorage.removeItem(`${provider}_token`);
        }
        this.closePanel(); // Close panel on logout
        console.log(`${provider} logged out`);
      }
    },
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

/* Auth Button (Right Side) */
.auth-button {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px 30px; /* Increase padding for a larger button */
  color: white;
  border: none;
  border-radius: 8px; /* Slightly larger border-radius */
  font-size: 18px; /* Increase font size */
  font-weight: bold; /* Make text bold */
  cursor: pointer;
  z-index: 1001;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
}

.auth-button:hover {
  background-color: #0056b3; /* Darker blue on hover */
  color: #f1f1f1; /* Lighter text color on hover */
  border: 2px solid #004080; /* Add a border on hover */
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
  top: 50%;
  right: -300px;
  width: 300px;
  height: 200px; /* Height enough for the buttons */
  transform: translateY(-50%); /* Adjust for centering */
  background-color: rgba(116, 115, 118, 0.2); /* Slightly transparent background */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: right 0.3s ease;
  border-radius: 8px; /* Rounded corners */
}

.sliding-panel.open {
  right: 0; /* Slide in the panel */
}

.sliding-panel.closed {
  right: -300px; /* Slide out the panel */
}

/* Panel Content Styles */
.panel-content {
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
}

.panel-button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.panel-button.disabled {
  opacity: 0.5; /* Disabled button opacity */
  cursor: not-allowed; /* Change cursor to indicate disabled state */
}

.panel-button img.logo {
  width: 20px;
  height: 20px;
  margin-left: 8px; /* Space between text and logo */
}
</style>
