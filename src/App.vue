<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <HelloWorld />
</template>

<style scoped>

</style>
