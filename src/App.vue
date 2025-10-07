<script setup lang="ts">
import { initFlowbite } from 'flowbite';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
import { onMounted } from 'vue';

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <Navbar />
    <Header />
    <Sidebar />

    <main class="ltr:ml-0 rtl:mr-0 ltr:sm:ml-64 rtl:sm:mr-64 px-6 py-8 bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-[calc(100vh-4rem)]">
      <div class="container mx-auto">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>

</style>
