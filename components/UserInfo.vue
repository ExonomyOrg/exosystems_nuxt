<template>
  <div class="user-info">
    <h2>Welcome, {{ user.name }}!</h2>
    <p>Username: {{ user.login }}</p>
    <p>Email: {{ user.email || 'Not provided' }}</p>
    <p>Bio: {{ user.bio || 'No bio available' }}</p>
    <p>Public Repos: {{ user.public_repos }}</p>
    <p>Followers: {{ user.followers }}</p>
    <p>Following: {{ user.following }}</p>
    <img :src="user.avatar_url" alt="User Avatar" class="avatar" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

// Define props to accept the user object
const props = defineProps({
  user: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
/* Add your styles for the User Info section */
.avatar {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
</style>
