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
          class="panel-button"
          :class="{ 'active': isLoggedIn('github') }"
          :disabled="isLoggedIn('github')"
        >
          Login with GitHub
          <img src="/assets/github-logo.svg" alt="GitHub Logo" class="logo" />
        </button>
        <button
          @click="loginWithMetaMask"
          class="panel-button"
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
          class="panel-button"
          :disabled="!isLoggedIn('google')"
          :class="{ 'disabled': !isLoggedIn('google') }"
        >
          Logout from Google
          <img src="/assets/google-logo.svg" alt="Google Logo" class="logo" />
        </button>
        <button
          @click="handleLogout('github')"
          class="panel-button"
          :disabled="!isLoggedIn('github')"
          :class="{ 'disabled': !isLoggedIn('github') }"
        >
          Logout from GitHub
          <img src="/assets/github-logo.svg" alt="GitHub Logo" class="logo" />
        </button>
        <button
          @click="handleLogout('metamask')"
          class="panel-button"
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
          localStorage.setItem('google_token', credential);
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
      const clientId = process.env.GITHUB_CLIENT_ID; // Replace with your GitHub client ID
      const redirectUri = 'http://localhost:3000/auth/callback/github'; // Replace with your actual callback URL
      const scope = 'repo user';
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

      window.location.href = authUrl; // Redirect user to GitHub OAuth URL
    },
    loginWithMetaMask() {
      // Your MetaMask login logic here
    },
    isLoggedIn(provider?: string): boolean {
      if (provider) {
        return !!localStorage.getItem(`${provider}_token`);
      }
      // Check if any provider token exists
      return !!localStorage.getItem('google_token') || !!localStorage.getItem('github_token') || !!localStorage.getItem('metamask_token');
    },
    handleLogout(provider: string) {
      if (this.isLoggedIn(provider)) {
        localStorage.removeItem(`${provider}_token`);
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
  background-color: #ffffff;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, border 0.3s ease;
}

.panel-button.disabled {
  background-color: #f5f5f5; /* Light grey for disabled state */
  color: #999999; /* Lighter text color */
  cursor: not-allowed; /* Disable cursor */
  opacity: 0.5; /* Fade out the button */
}

.panel-button.active {
  background-color: #cccccc; /* Light grey for sunken effect */
  color: #666666; /* Darker text color */
  border: 2px inset #aaaaaa; /* Inset border for sunken effect */
  cursor: not-allowed; /* Disable cursor */
}

.logo {
  width: 24px; /* Adjust size as needed */
  height: auto;
  margin-left: 12px; /* Increase space between logo and text */
}
</style>
