<script  setup>
import Header from './components/Header.vue';
</script>

<template>
  <header class=" sticky top-0 z-50 bg-white" ><Header/></header>
  <section class=" w-[90%] m-auto"><router-view/></section>
  <footer></footer>
</template>
