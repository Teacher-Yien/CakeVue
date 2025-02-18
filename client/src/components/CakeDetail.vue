<script setup>  
import { ref, onMounted } from 'vue';  
import { useRoute } from 'vue-router';  
import axios from 'axios';  

const cake = ref(null);  
const errorMessage = ref(null); // Reactive variable for error messages  
const isLoading = ref(true); // Reactive variable for loading state  
const route = useRoute();  

const fetchCake = async (id) => {  
  try {  
    const response = await axios.get(`http://localhost:3000/cake/${id}`);  
    cake.value = response.data;  
  } catch (error) {  
    errorMessage.value = 'Error fetching cake details. Please try again later.';  
    console.error('Error fetching cake:', error);  
  } finally {  
    isLoading.value = false; // Set loading to false after fetching  
  }  
};  

onMounted(() => {  
  const cakeId = route.params.id;  
  fetchCake(cakeId);  
});  
</script>  

<template>  
  <section class="w-[80%] m-auto grid md:grid-cols-2 grid-cols-1  p-5">  
    <div class="boximg">  
      <img :src="cake?.images" alt="Cake image" v-if="cake" />  
      <p v-else-if="isLoading">Loading...</p>  
      <p v-else>{{ errorMessage }}</p>  
    </div>  
    <div class="descriptions">  
      <h1 class=" text-[4rem]">{{ cake?.name }}</h1>  
      <p class=" text-2xl text-gray-600">RS: {{ cake?.price }}.00</p>
      <p class=" text-2xl font-medium ">Ingredient Details.</p>
      <p class=" p-5 border border-gray-500">Chocolate cake sponge, Chocolate Butter Cream, chocolate ganache, Choco chips, cocoa solid, milk solid, liquid glucose.
      Allergen: Wheat, Egg, Soya, Milk.</p>
      <div class=" group-btn flex p-5 border border-gray-300">
          <button>-</button>
          <p>1</p>
          <button>+</button>
      </div>
      <button>Add to Cart</button>
      <button>Proceed to Checkout</button>
    </div>  
  </section>  
</template>