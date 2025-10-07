<template>
  <form class="max-w-sm mx-auto" @submit.prevent="handleSubmit">
    <FormInput v-model="form.name" name="name" type="text" :label="$t('name')" :placeholder="$t('name')" required />
    <FormInput v-model="form.email" name="email" type="email" :label="$t('email')" :placeholder="$t('email')" required />
    <FormPassword v-model="form.password" name="password" :label="$t('password')" :placeholder="$t('password')" required />
    <FormPassword v-model="form.password_confirmation" name="password_confirmation" :label="$t('password_confirmation')" :placeholder="$t('password_confirmation')" required />
    
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
      <FormButton type="submit" variant="primary" size="md" :block="true">{{ $t('register') }}</FormButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../././stores/auth.store";
import FormInput from '@/components/form/FormInput.vue';
import FormPassword from '@/components/form/FormPassword.vue';
import FormButton from '@/components/form/FormButton.vue';

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
