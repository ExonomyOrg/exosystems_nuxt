<template>
  <nav class="navbar">
    <img src="./exosys.png" alt="ExoSystems Logo" class="navbar-logo" />
    <div class="navbar-links">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
      <nuxt-link to="/internship">Internship</nuxt-link>
      <nuxt-link to="/design">Design</nuxt-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #1a1a1a;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0;
  padding: 0;
}
.navbar-logo {
  max-height: 150px;
  width: auto;
  margin: 0;
  padding: 0;
}
.navbar-links {
  display: flex;
  border: none;
  text-decoration: none;
  align-items: flex-end; 
}
.navbar a {
  display: inline-block;
  color: #ffffff;
  text-align: center;
  padding: 0.8rem 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}
.navbar a:hover {
  background-color: #333333;
  color: #007bff;
}
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 1rem 0.5rem;
    align-items: center; 
  }
  .navbar-logo {
    width: 100%;
    height: auto;
    max-height: none;
    margin-bottom: 1rem;
  }
  .navbar-links {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center; 
  }
  .navbar a {
    display: inline-block;
    width: auto;
    text-align: center;
    padding: 0.5rem 0.8rem;
  }
}
</style>