<script setup lang="ts">
import { computed, ref } from 'vue';

const modelValue = defineModel<string>({ default: '' });

const props = defineProps<{
  id?: string
  name?: string
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  autocomplete?: string
}>();

const inputId = computed(() => props.id || props.name || `pwd-${Math.random().toString(36).slice(2, 8)}`);
const show = ref(false);

const inputType = computed(() => (show.value ? 'text' : 'password'));
</script>

<template>
  <div class="mb-5">
    <label v-if="label" :for="inputId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }} <span v-if="required" class="text-red-500">*</span></label>
    <div class="relative">
      <input
        :id="inputId"
        :name="name"
        v-model="modelValue"
        :type="inputType"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :autocomplete="autocomplete || 'current-password'"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button type="button" class="absolute inset-y-0 right-0 px-3 text-gray-500 dark:text-gray-300" @click="show = !show" :aria-label="show ? 'Hide password' : 'Show password'">
        {{ show ? '🙈' : '👁️' }}
      </button>
    </div>
  </div>
</template>


