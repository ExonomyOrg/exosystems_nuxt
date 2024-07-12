<template>
    <nav class="navbar">
      <img src="./es.jpg" alt="ExoSystems Logo" class="navbar-logo" />
      <div class="navbar-links">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
        <nuxt-link to="/internship">Internship</nuxt-link>
        <nuxt-link to="/exonomy-design">Exonomy Design</nuxt-link>
      </div>
    </nav>
  </template>
  
  <style scoped>
  .navbar {
    background-color: #f8f8f8;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  
  .navbar-logo {
    max-height: 50px;
    width: auto;
    margin: 0;
    padding: 0;
  }
  
  .navbar-links {
    display: flex;
    border: none;
    text-decoration: none;
    align-items: center;
  }
  
  .navbar a {
    display: inline-block;
    color: #333333;
    text-align: center;
    padding: 0.8rem 1rem;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .navbar a:hover {
    background-color: #f0f0f0;
    color: #007bff
  }
  
  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
      padding: 0.5rem;
    }
  
    .navbar-logo {
      width: 100%;
      height: auto;
      max-height: none;
      margin: 0;
      padding: 0;
    }
  
    .navbar-links {
      flex-direction: column;
      width: 100%;
    }
  
    .navbar a {
      display: block;
      width: 100%;
      text-align: left;
    }
    
  }
  </style>
  