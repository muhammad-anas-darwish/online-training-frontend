<script setup lang="ts">
import { initFlowbite } from 'flowbite';
import Navbar from './components/Navbar.vue';
import { onMounted } from 'vue';

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <Navbar />
    <header class="bg-white dark:bg-gray-800 shadow dark:shadow-gray-700">
      <nav class="container mx-auto px-6 py-3">
        <div class="flex justify-between items-center">
          <div class="text-xl font-semibold text-gray-700 dark:text-gray-200">
            <RouterLink to="/" class="hover:text-gray-900 dark:hover:text-white">My App</RouterLink>
          </div>
          <div class="space-x-4">
            <RouterLink 
              to="/" 
              class="px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-300"
              active-class="bg-gray-100 dark:bg-gray-700"
            >
              Home
            </RouterLink>
            <RouterLink 
              to="/about" 
              class="px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-300"
              active-class="bg-gray-100 dark:bg-gray-700"
            >
              About
            </RouterLink>
          </div>
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-6 py-8 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

</style>
