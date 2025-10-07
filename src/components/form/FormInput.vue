<script setup lang="ts">
import { computed } from 'vue';

const modelValue = defineModel<string>({ default: '' });

const props = defineProps<{
  id?: string
  name?: string
  type?: string
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  autocomplete?: string
}>();

const inputId = computed(() => props.id || props.name || `input-${Math.random().toString(36).slice(2, 8)}`);
</script>

<template>
  <div class="mb-5">
    <label v-if="label" :for="inputId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }} <span v-if="required" class="text-red-500">*</span></label>
    <input
      :id="inputId"
      :name="name"
      v-model="modelValue"
      :type="type || 'text'"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :autocomplete="autocomplete"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>
  
</template>


