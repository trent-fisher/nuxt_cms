<template>
  <section>
    <div class="text-2xl text-center pt-10">
      <slot name="text" />
    </div>
    <div class="pt-10 pb-10 flex justify-center relative">
      <slot name="image" />
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<!-- <template>
  <section class="pt-10 pb-10 flex justify-center relative">
    <div>

   
      <div class="md:mb-10">
        <h2 class="text-center frank-ruhl-libre md:text-5xl text-2xl pb-2 text-white z-10">
          <slot name="text" />
        </h2>
        <div class="bg-white md:hidden h-[1px] w-48 mb-6 mx-auto"></div>
      </div>



      <div class="absolute inset-0 w-full h-64 object-cover">
        <slot name="image" />
      </div>
    </div>

  </section>
</template>

<script lang="ts" setup>

</script> -->
