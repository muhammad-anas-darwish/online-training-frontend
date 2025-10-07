<script setup lang="ts">
import { computed } from 'vue';

const modelValue = defineModel<boolean>({ default: false });

const props = defineProps<{
  id?: string
  name?: string
  label?: string
  required?: boolean
  disabled?: boolean
}>();

const inputId = computed(() => props.id || props.name || `chk-${Math.random().toString(36).slice(2, 8)}`);
</script>

<template>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input
        :id="inputId"
        :name="name"
        v-model="modelValue"
        type="checkbox"
        :required="required"
        :disabled="disabled"
        class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
      />
    </div>
    <label v-if="label" :for="inputId" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ label }} <span v-if="required" class="text-red-500">*</span></label>
  </div>
</template>


