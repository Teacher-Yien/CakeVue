<script  setup>
import Header from './components/Header.vue';
import Footers from './components/Footers.vue';
</script>

<template>
  <header class=" sticky top-0 z-50 bg-white" ><Header/></header>
  <section ><router-view/></section>
  <footer><Footers></Footers></footer>
</template>
