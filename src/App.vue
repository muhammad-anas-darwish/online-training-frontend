<script setup lang="ts">
import { initFlowbite } from 'flowbite';

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <header class="bg-white shadow">
    <nav class="container mx-auto px-6 py-3">
      <div class="flex justify-between items-center">
        <div class="text-xl font-semibold text-gray-700">
          <RouterLink to="/" class="hover:text-gray-900">My App</RouterLink>
        </div>
        <div class="space-x-4">
          <RouterLink 
            to="/" 
            class="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            active-class="bg-gray-100"
          >
            Home
          </RouterLink>
          <RouterLink 
            to="/about" 
            class="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            active-class="bg-gray-100"
          >
            About
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>

  <main class="container mx-auto px-6 py-8">
    <RouterView />
  </main>
</template>

<style scoped>

</style>
