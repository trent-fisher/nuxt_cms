<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <div class="pb-24">
      <Header />
    </div>

    <div class="flex-1">
      <slot />
    </div>

    <!-- <div id="footer">
      <Footer />
    </div> -->
  </div>
</template>

<script lang="ts" setup>
</script>

<style></style>