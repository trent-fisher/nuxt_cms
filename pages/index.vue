<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>
  <!-- <img src="/assets/Luxury-9.png" alt=""> -->

  <ul>
    <li>
      test
    </li>
    <li>
      test
    </li>
    <li>
      test
    </li>
  </ul>

</template>

<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})


</script>
