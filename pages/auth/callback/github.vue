<template>
  <div v-if="loading">Exchanging authorization code for access token...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else-if="token">Successfully authenticated! Token: {{ token }}</div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const loading = ref(true);
const error = ref<string | null>(null);
const token = ref<string | null>(null);

const router = useRouter();
const route = useRoute();

// Get the authorization code from the URL query parameter
const code = route.query.code;

// Handle case where code might be an array or undefined
const authCode: string | null = Array.isArray(code) ? code[0] : code || null;

const exchangeCodeForToken = async (code: string | null): Promise<void> => {
  if (!code) {
    error.value = 'No valid authorization code found';
    loading.value = false;
    return;
  }

  try {
    // Call your Nuxt 3 server route to exchange the code for a token
    const response = await axios.post('/api/github-callback', { code });

    const { access_token, error: serverError } = response.data;
    if (access_token) {
      // Store the access token securely (e.g., in localStorage or Vuex/Pinia state)
      localStorage.setItem('github_token', access_token);
      token.value = access_token;
      router.push('/github-dashboard');
    } else {
      throw new Error(serverError || 'No access token returned from server');
    }
  } catch (err) {
    console.error('Error exchanging authorization code:', err);
    error.value = 'Failed to exchange authorization code';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  if (authCode) {
    exchangeCodeForToken(authCode);
  } else {
    error.value = 'No authorization code found in the URL';
    loading.value = false;
  }
});
</script>