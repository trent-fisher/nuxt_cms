<!-- components/Button.vue -->
<template>
  <button
    :class="[
      'px-4 py-2 font-semibold rounded',
      colorClasses[color] || colorClasses.default
    ]"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  }
})

const colorClasses = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  warning: 'bg-yellow-500 text-black hover:bg-yellow-600',
  danger: 'bg-red-500 text-white hover:bg-red-600',
  default: 'bg-black text-white hover:bg-gray-800'
}
</script>
