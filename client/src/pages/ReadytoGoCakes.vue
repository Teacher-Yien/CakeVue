<template>  
  <section class="w-[90%] m-auto">  
    <h1 class="text-4xl font-medium">Ready to Go Cakes</h1>  
    <div class="grid md:grid-cols-4 grid-cols-2 gap-2 mt-3">  
      <div v-for="cake in cakes" :key="cake.id" class="card mt-5" @click="goToDetail(cake.id)" >  
        <div class="boxpic w-[100%] cursor-pointer">  
          <img :src="cake.images" :alt="cake.name" />  
        </div>  
        <div class="p-3">  
          <p class="text-center text-[18px] text-black hover:text-[#6fbfeff] cursor-pointer">{{ cake.name }}</p>  
          <p class="cursor-pointer text-[15px] text-center">Rs {{ cake.price }}</p>  
        </div>  
      </div>  
    </div>  
  </section>  
</template>  

<script setup>  
import { ref, onMounted } from 'vue';  
import { useRouter } from 'vue-router';  
import axios from 'axios';

// Reactive variable to store the fetched data  
const cakes = ref([]);  

// Initialize the router  
const router = useRouter();  

// Function to fetch data from the API  
const fetchCakes = async () => {  
  try {  
    const response = await axios.get(`http://localhost:3000/cake`);  
    cakes.value = response.data;  
  } catch (error) {  
    console.error('Error fetching cakes:', error);  
  }  
};  

// Define the goToDetail function  
const goToDetail = (id) => {  
  router.push({ name: 'cake-detail', params: { id } }); // Ensure this matches the router name  
}; 

onMounted(() => {  
  fetchCakes(); // Fetch cakes when the component mounts  
});  
</script>  

<style scoped>  
.boxpic {  
  overflow: hidden;  
  transform: scale(1);  
}  

.boxpic:hover {  
  transform: scale(1.05);  
  transition: all 0.4s ease-in-out;  
}  
</style>