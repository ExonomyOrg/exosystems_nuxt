
   <template>
    <div>
      <div class="dropdown-header">
        <h4 @click="toggle">{{ title }}</h4>
        <span class="dropdown-icon" @click="toggle">&#9662;</span>
      </div>
      <div v-if="isOpen" class="content">
        <!-- No wrapper div; directly style the iframe container -->
        <iframe :src="url" frameborder="0" width="100%" height="500px"></iframe>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    title: String,
    url: String,
  });
  
  const isOpen = ref(false);
  
  const toggle = (event) => {
    event.stopPropagation(); // Prevent event from propagating to parent elements
    isOpen.value = !isOpen.value;
  };
  </script>
  
  <style scoped>
  .dropdown-header {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .dropdown-icon {
    margin-left: 5px;
    font-size: 1.2em;
    color: #fff;
  }
  
  .content {
    margin-top: 10px;
    background-color: #ffffff; /* Ensure a background color for the iframe container */
    padding: 3px; /* Optional padding to create space around the iframe */
    border-radius: 3px; /* Optional rounded corners for better styling */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Optional shadow to make the container stand out */
  }
  
  .content iframe {
    border: none; /* Remove default iframe border */
  }
  </style>
  