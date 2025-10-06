<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="form.email" name="email" type="email" :placeholder="$t('email' )" required />
    <input v-model="form.name" name="name" type="text" :placeholder="$t('name' )" required />
    <input v-model="form.password" name="password" type="password" :placeholder="$t('password' )" required />
    <input v-model="form.password_confirmation" name="password_confirmation" type="password" :placeholder="$t('password_confirmation' )" required />
    <button type="submit">{{ $t("register") }}</button>
    
    <RouterLink 
      :to="{ name: 'login' }" 
      class="px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-300"
      active-class="bg-gray-100 dark:bg-gray-700"
    >
      Login
    </RouterLink>
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
