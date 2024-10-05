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

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.user-info {
  flex: 2;
  max-height: 650px;
  background-color: #2b06af;
  overflow: auto;
  padding: 1rem;
  border-radius: 8px;
  position: relative;

  /* Centering content */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Center items horizontally */
  justify-content: center;
  /* Center items vertically */
  text-align: center;
  /* Center text inside elements */
}

.user-info .avatar {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-top: 1rem;
}
</style>
