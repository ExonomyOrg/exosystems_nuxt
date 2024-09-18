<template>
  <div class="assigned-issues">
    <h2>Assigned Issues</h2>
    <ul v-if="assignedIssues.length > 0">
      <li v-for="issue in assignedIssues" :key="issue.id">
        <a :href="issue.html_url" target="_blank">{{ issue.title }}</a>
        <p>Status: {{ issue.state }}</p>
      </li>
    </ul>
    <p v-else>No assigned issues found.</p>
  </div>
</template>

<script>
export default {
  props: {
    assignedIssues: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
    error: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.assigned-issues {
  flex: 3;
  max-height: 650px;
  background-color: #494646;
  overflow: auto;
  padding: 1rem;
  border-radius: 8px;
}

.assigned-issues ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.assigned-issues li {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-bottom: 1px solid #6c6c6c;
}
</style>
