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

// Find a single author
const { data: author } = await useAsyncData('john-doe', () => {
  return queryCollection('authors')
    .where('name', '=', 'John Doe')
    .first()
})

// Get all authors
const { data: authors } = await useAsyncData('authors', () => {
  return queryCollection('authors')
    .order('name', 'ASC')
    .all()
})
</script>
