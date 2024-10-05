<template>
  <div class="contributions">
    <h2>Your Contributions to {{ selectedRepo }}
      <!-- Use v-bind and @change with emit -->
      <select :value="selectedRepo" @change="updateRepo($event)" class="repo-dropdown">
        <option value="exosystems_nuxt">exosystems_nuxt</option>
        <option value="Exonomy">Exonomy</option>
        <option value="ExoTheme">ExoTheme</option>
      </select>
    </h2>
    <ul>
      <li v-for="contribution in contributions" :key="contribution.sha">
        <p><strong>Branch:</strong> {{ contribution.branch }}</p>
        <p><strong>Commit Message:</strong> {{ contribution.commit.message }}</p>
        <p><strong>Date:</strong> {{ new Date(contribution.commit.committer.date).toLocaleDateString() }}</p>
      </li>
    </ul>
    <div v-if="contributions.length === 0">
      <p>No contributions found for this repository.</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  selectedRepo: {
    type: String,
    required: true
  },
  contributions: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['update:selectedRepo']);

const updateRepo = (event) => {
  emit('update:selectedRepo', event.target.value);
};
</script>


<style scoped>
.contributions {
  flex: 3;
  max-height: 650px;
  background-color: #494646;
  overflow: auto;
  padding: 1rem;
  border-radius: 8px;
}

.repo-dropdown {
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #494646;
  color: #7bcbed;
  font-size: 1.2rem;
  cursor: pointer;
  appearance: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: bold;
}

.repo-dropdown:hover {
  background-color: #3e3e3e;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.contributions ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contributions li {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-bottom: 1px solid #6c6c6c;
}
</style>
