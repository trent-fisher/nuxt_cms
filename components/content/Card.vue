<!-- components/content/Card.vue -->
<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  padding: 0.5rem; 
  border: 1px solid #e5e7eb; 
  background-color: white;
  border-radius: 0.375rem; 
  transition: background-color 0.3s, border-color 0.3s;
}



</style>
