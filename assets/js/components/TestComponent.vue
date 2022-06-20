<template>
   <div class="testComponent" @click="scrollTop">
      <button class="button -top">top</button>
   </div>
</template>
<script setup>

   function scrollTop() {
      window.scrollTo(0,0)
   }

</script>