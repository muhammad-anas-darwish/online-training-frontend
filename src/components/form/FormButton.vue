<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  block?: boolean
  addSmW5?: boolean // adds the class `sm:w-5` when true
}>();

const emit = defineEmits<{
  (e: 'click', ev: MouseEvent): void
}>();

const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg focus:outline-none focus:ring-4 transition-colors duration-200';

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600';
    case 'danger':
      return 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-300 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-900';
    default:
      return 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-sm px-3 py-2';
    case 'lg':
      return 'text-base px-6 py-3';
    default:
      return 'text-sm px-5 py-2.5';
  }
});

const widthClasses = computed(() => {
  const classes: string[] = [];
  if (props.block) classes.push('w-full');
  if (props.addSmW5) classes.push('sm:w-5');
  return classes.join(' ');
});

const classes = computed(() => [baseClasses, variantClasses.value, sizeClasses.value, widthClasses.value].join(' '));

const onClick = (ev: MouseEvent) => {
  if (props.disabled) return;
  emit('click', ev);
};
</script>

<template>
  <button
    :type="type || 'button'"
    :class="classes"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>


