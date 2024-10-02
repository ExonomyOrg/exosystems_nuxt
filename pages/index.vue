<template>
  <Navbar />
  <div style="margin-left: 15%; margin-top: 5%; margin-right: 15%;">
    <h1>Welcome to ExoSystems</h1>
    <p>ExoSystems is a pioneering company dedicated to building innovative exo applications. Our flagship projects,
      Exonomy and Exocracy, are designed to revolutionize peer-to-peer commerce and social media autonomy.</p>
    <p>We're committed to creating a future of decentralized, sovereign interactions in both commercial and social
      spheres. Join us in shaping the future of digital interactions.</p>
    <nuxt-link to="/internship" class="button">Explore Opportunities</nuxt-link>

    <!-- Conditional Button (Login/Logout) -->
    <client-only>
      <button v-if="!loggedIn" class="auth-button" :style="{ backgroundColor: '#007bff', color: '#fff' }"
        @click="toggleAuthPanel">
        Login?
      </button>

      <button v-else class="auth-button" :style="{ backgroundColor: '#000', color: '#fff' }" @click="toggleAuthPanel">
        Logout?
      </button>
    </client-only>
    <!-- Background Overlay -->
    <div v-if="isPanelVisible || showLogoutPanel" class="overlay" @click="closePanel"></div>

    <!-- Auth Sliding Panel -->
    <div :class="['sliding-panel', (isPanelVisible || showLogoutPanel) ? 'open' : 'closed']" @click.stop>
      <div class="panel-content">
        <!-- Google Button -->
        <div>
          <GoogleSignInButton v-if="!isLoggedIn('google')" @success="handleLoginSuccess" @error="handleLoginError" />
          <button v-if="isLoggedIn('google')" @click="handleLogout('google')" class="panel-button pressed">
            Logout from Google
            <img src="/assets/google-logo.svg" alt="Google Logo" class="logo" />
          </button>
        </div>

        <!-- GitHub Button -->
        <div>
          <button v-if="!isLoggedIn('github')" @click="loginWithGitHub" class="white-button panel-button">
            Login with GitHub
            <img src="/assets/github-logo.svg" alt="GitHub Logo" class="logo" />
          </button>
          <button v-if="isLoggedIn('github')" @click="handleLogout('github')" class="panel-button pressed">
            Logout from GitHub
            <img src="/assets/github-logo.svg" alt="GitHub Logo" class="logo" />
          </button>
        </div>

        <!-- MetaMask Button -->
        <div>
          <button v-if="!isLoggedIn('metamask')" @click="connectWallet" class="panel-button white-button">
            Login with MetaMask
            <img src="/assets/metamask-logo.svg" alt="MetaMask Logo" class="logo" />
          </button>
          <button v-if="isLoggedIn('metamask')" @click="handleLogout('metamask')" class="panel-button pressed">
            Logout from MetaMask
            <img src="/assets/metamask-logo.svg" alt="MetaMask Logo" class="logo" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useTokenStore } from '~/stores/tokenStore' // Importing Pinia store
import { defineComponent, ref, onMounted, computed } from 'vue';
import Navbar from '@/components/navbar.vue';
import { GoogleSignInButton, type CredentialResponse } from "vue3-google-signin";
import { useRuntimeConfig } from '#app';
import { is } from 'drizzle-orm';

export default defineComponent({
  components: {
    Navbar,
    GoogleSignInButton,
  },
  setup() {
    // Initialize the store
    const tokenStore = useTokenStore();
    const { public: { githubClientId } } = useRuntimeConfig(); // Accessing public runtime config
    const loggedIn = ref(false);

    const isLoggedIn = (provider: string): boolean => {
      if (process.client) {
        switch (provider) {
          case 'google':
            return !!localStorage.getItem('google_token');
          case 'github':
            return !!localStorage.getItem('github_token');
          case 'metamask':
            return !!localStorage.getItem('metamask_token');
          default:
            return false;
        }
      }
      return false;
    };

    onMounted(() => {
      // Only access localStorage on the client
      if (process.client) {
        loggedIn.value = !!localStorage.getItem('google_token') ||
          !!localStorage.getItem('github_token') ||
          !!localStorage.getItem('metamask_token');
      }
    });

    return {
      githubClientId,
      loggedIn,
      tokenStore,
      isLoggedIn,
    };
  },
  data() {
    return {
      isPanelVisible: false,
      showLogoutPanel: false,
    };
  },
  methods: {
    toggleAuthPanel() {
      if (this.isLoggedIn('google') || this.isLoggedIn('github') || this.isLoggedIn('metamask')) {
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
      if (process.client) { // Check if on client
        localStorage.setItem('google_token', credential || ' ');
        localStorage.setItem('auth_provider', 'google');
      }
      window.location.href = `https://exosystems.net/user-form/?token=${credential}`;
    },
    handleLoginError() {
      console.error("Login failed");
    },
    loginWithGitHub() {
      const clientId = this.githubClientId;
      const redirectUri = 'https://exosystems.net/auth/callback/github';
      const scope = 'repo user';
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

      window.location.href = authUrl;
    },
    // Function to check if MetaMask is installed
    checkMetaMaskAvailability() {
      return !!window.ethereum;
    },
    async connectWallet() {
      if (!this.checkMetaMaskAvailability()) return;

      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        const walletAddress = accounts[0];
        console.log(walletAddress);
        localStorage.setItem('auth_provider', 'metamask');
        window.location.href = `https://exosystems.net/user-form/?token=${walletAddress}`;
      } catch (err) {
        console.error('Could not connect to MetaMask', err);
      }
    },
    handleLogout(provider: string) {
      if (this.isLoggedIn(provider)) {
        if (process.client) { // Check if on client
          localStorage.removeItem(`${provider}_token`);
        }
        this.loggedIn = !!localStorage.getItem('google_token') ||
          !!localStorage.getItem('github_token') ||
          !!localStorage.getItem('metamask_token');// Update loggedIn status after logout
        this.closePanel();
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
  padding: 15px 30px;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1001;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-button:hover {
  background-color: #0056b3;
  color: #f1f1f1;
  border: 2px solid #004080;
}

/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

/* Sliding Panel Styles */
.sliding-panel {
  position: fixed;
  top: 50%;
  right: -300px;
  width: 300px;
  height: auto;
  transform: translateY(-50%);
  background-color: rgba(116, 115, 118, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: right 0.3s ease;
  border-radius: 8px;
}

.sliding-panel.open {
  right: 0;
}

.sliding-panel.closed {
  right: -300px;
}

/* Panel Content Styles */
.panel-content {
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
}

/* Button Styles */
.panel-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  /* Ensures consistent button width */
  max-width: 260px;
  transition: opacity 0.3s ease;
  height: 40px;
  /* Adjust height if needed */
}

.panel-button img.logo {
  margin-left: 10px;
  width: 25px;
  height: 25px;
}

/* Specific Button Styles */
.white-button {
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
}

.pressed {
  background-color: #333;
}

.github-button {
  background-color: #333 !important;
}

.metamask-button {
  background-color: #333;
  color: #fff;
}

/* Adjustments for specific button types */
.github-button,
.metamask-button,
.white-button {
  height: 40px;
}
</style>
