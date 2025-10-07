<template>
  <form class="max-w-sm mx-auto" @submit.prevent="handleSubmit">
    <div class="mb-5">
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t('name' ) }}</label>
      <input v-model="form.name" id="name" name="name" type="text" :placeholder="$t('name' )" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    </div>
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t('email' ) }}</label>
      <input v-model="form.email" id="email" name="email" type="email" :placeholder="$t('email' )" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    </div>
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t('password' ) }}</label>
      <input v-model="form.password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    </div>
    <div class="mb-5">
      <label for="password_confirmation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t('password_confirmation' ) }}</label>
      <input v-model="form.password_confirmation" type="password" id="password_confirmation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    </div>
    
    <div class ="mb-5 flex">
      <p>{{ $t('Already have an account?') }}</p>
      <RouterLink 
        :to="{ name: 'login' }" 
        class="pl-1 text-blue-700"
        active-class="bg-gray-100 dark:bg-gray-700"
      >
        {{ $t('login' ) }} 
      </RouterLink>   
    </div>
    <div class="w-full">
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-">{{ $t('login' ) }}</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../././stores/auth.store";

const router = useRouter();
const authStore = useAuthStore();

const form = ref({
  email: "",
  name: "",
  password: "",
  password_confirmation: "",
});

const handleSubmit = async () => {
  await authStore.register(form.value);
  router.push({ name: "home" });
};
</script>
