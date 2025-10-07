<template>
  <form class="max-w-sm mx-auto" @submit.prevent="handleSubmit">
    <FormInput v-model="form.email" name="email" type="email" :label="$t('email')" :placeholder="$t('email')" required />
    <FormPassword v-model="form.password" name="password" :label="$t('password')" :placeholder="$t('password')" required />

    <div class ="mb-5 flex">
      <p>{{ $t('Do not have an account?') }}</p>
      <RouterLink 
        :to="{ name: 'register' }" 
        class="pl-1 text-blue-700"
        active-class="bg-gray-100 dark:bg-gray-700"
      >
        {{ $t('sign up' ) }} 
      </RouterLink>   
    </div>
    
    <div class="w-full">
      <FormButton type="submit" variant="primary" size="md" :block="true">
        {{ $t('login') }}
      </FormButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from ".././stores/auth.store";
import FormInput from '@/components/form/FormInput.vue';
import FormPassword from '@/components/form/FormPassword.vue';
import FormButton from '@/components/form/FormButton.vue';

const router = useRouter();
const authStore = useAuthStore();

const form = ref({
  email: "",
  password: "",
});

const handleSubmit = async () => {
  await authStore.login(form.value);
  router.push({ name: "home" });
};
</script>
