<template>
  <!-- Render the blog post as Prose & Vue components -->
  <ContentRenderer :value="post" />
  <h1 class="text-lg" :value="post.title">{{   }}</h1>
</template>

<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})


</script>