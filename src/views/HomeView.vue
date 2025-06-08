<template>
  <div class="home">
    <h1>Welcome to the Home Page</h1>
    <p>This is the main page of your application.</p>
    <router-link to="/about" class="text-blue-600 hover:underline">Go to About</router-link>
  </div>
</template>

<script setup lang="ts">
// Component logic goes here
</script>

<style scoped>
.home {
  padding: 20px;
  text-align: center;
}
</style>
