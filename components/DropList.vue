<template>
    <div>
      <h4 @click="toggle">{{ title }}</h4>
      <div v-if="isOpen" class="content">
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
  
  const toggle = () => {
    isOpen.value = !isOpen.value;
  };
  </script>
  
  <style scoped>
  h4 {
    cursor: pointer;
    color: blue;
    text-decoration: underline;
  }
  .content {
    margin-top: 10px;
  }
  </style>
  