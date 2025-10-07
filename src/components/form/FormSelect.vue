<script setup lang="ts">
import { computed } from 'vue';

type Option = { label: string; value: string | number };

const modelValue = defineModel<string | number | null>({ default: null });

const props = defineProps<{
  id?: string
  name?: string
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  options: Option[]
}>();

const inputId = computed(() => props.id || props.name || `select-${Math.random().toString(36).slice(2, 8)}`);
</script>

<template>
  <div class="mb-5">
    <label v-if="label" :for="inputId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}</label>
    <select
      :id="inputId"
      :name="name"
      v-model="modelValue"
      :required="required"
      :disabled="disabled"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option v-if="placeholder" disabled value="">{{ placeholder }}</option>
      <option v-for="opt in options" :key="String(opt.value)" :value="opt.value">{{ opt.label }}</option>
    </select>
  </div>
</template>


