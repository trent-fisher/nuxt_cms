<template>
  <div>
    <ul v-for="post in allPosts" :key="post.title">
      <!-- <li>{{ post }}</li> -->
      <a :href="post.stem">Anchor:{{ post.title }}</a> <br>
      <NuxtLink :to="post.stem" >NuxtLink </NuxtLink>
    </ul>
  </div>
</template>

<script lang="ts" setup>
// Get the foo post
const fooPost = await queryCollection('blog').path('/blog/foo').first()

// Find all posts
const allPosts = await queryCollection('blog').order('date', 'DESC').all()

const { data: blog } = await useAsyncData(() => queryCollection('blog').path('/').first())

</script>

<style></style>