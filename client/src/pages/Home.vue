<template>  
  <section>  
    <img src="https://cdn.shopify.com/s/files/1/0633/9382/4983/files/WEBSITE_BANNER-01_1.jpg?v=1737035343" alt="Bakery Banner">  
    <h1 class="text-3xl text-center p-5">Experience Love at First Bite. Try the Mio Amore Best Sellers!</h1>  
  </section>  

  <section class="bar w-[90%] m-auto overflow-x-auto h-[600px] overflow-hidden py-3">  
    <div class="flex gap-4 mt-[3rem]">  
      <div v-for="cake in cakes.slice(0, 6)" :key="cake.id" @click="goToDetail(cake.id)" class="card mt-5 flex-none w-[300px]">  
        <div class="cursor-pointer">  
          <img class="w-full" :src="cake.images" :alt="cake.name">  
        </div>  
        <div class="p-3 text-center">  
          <p class="text-[18px] text-black hover:text-[#6fbeff] hover:underline cursor-pointer">{{ cake.name }}</p>  
          <p class="text-[15px]">Rs {{ cake.price }}</p>  
        </div>  
        <button class="w-full rounded-full h-[50px] bg-[#9d0d93] text-white text-[20px]"  
                @click="addToCart(cake)">Add to cart</button>  
      </div>  
    </div>  
  </section>  

  <section class="mt-5 w-[90%] m-auto">  
    <h1 class="text-3xl text-center">Feeling like a cakewalk? Explore our amazing range of cakes!</h1>  
    <div class="grid md:grid-cols-4 grid-cols-2 gap-2 mt-[3rem]">  
      <div v-for="cake in cakes" :key="cake.id" @click="goToDetail(cake.id)" class="card mt-5">  
        <div class="w-full cursor-pointer">  
          <img :src="cake.images" :alt="cake.name">  
        </div>  
        <div class="p-3 text-center">  
          <p class="text-[18px] text-black hover:text-[#6fbeff] hover:underline cursor-pointer">{{ cake.name }}</p>  
          <p class="text-[15px]">Rs {{ cake.price }}</p>  
        </div>  
        <button class="w-full rounded-full h-[50px] bg-[#9d0d93] text-white text-[20px]"  
                @click="addToCart(cake)">Add to cart</button>  
      </div>  
    </div>  
  </section>  

  <section class="mt-5">  
    <h1 class="text-3xl text-center">A special cake for all seasons and reasons!</h1>  
    <article class="bar w-[90%] m-auto overflow-x-auto h-[600px] overflow-hidden py-3">  
      <div class="flex gap-4 mt-[3rem]">  
        <div v-for="cake in specialcakes" :key="cake.id" @click="goToDetail(cake.id)" class="card mt-5 flex-none w-[300px]">  
          <div class="cursor-pointer">  
            <img class="w-full" :src="cake.images" :alt="cake.name">  
          </div>  
          <div class="p-3 text-center">  
            <p class="text-[18px] text-black hover:text-[#6fbeff] hover:underline cursor-pointer">{{ cake.name }}</p>  
            <p class="text-[15px]">Rs {{ cake.price }}</p>  
          </div>  
          <button class="w-full rounded-full h-[50px] bg-[#9d0d93] text-white text-[20px]"  
                  @click="addToCart(cake)">Add to cart</button>  
        </div>  
      </div>  
    </article>  
  </section>  

  <section class="mt-7 w-[90%] m-auto ">  
    <h1 class="text-3xl text-center">Our latest films</h1>  
    <div id="default-carousel" class="relative w-full bg-gray-300 mt-8 h-[600px]">  
      <div class="relative overflow-hidden rounded-lg md:h-full">  
        <!-- Carousel items -->  
        <div class="hidden duration-700 ease-in-out" data-carousel-item>  
          <embed src="https://www.youtube.com/v/0bIRwBpBcZQ" class="absolute block w-full h-full" type="text/html">  
        </div>  
        <div class="hidden duration-700 ease-in-out" data-carousel-item>  
          <embed src="https://www.youtube.com/v/0cCJ3jrsBhs" class="absolute block w-full h-full" type="text/html">  
        </div>  
        <div class="hidden duration-700 ease-in-out" data-carousel-item>  
          <embed src="https://www.youtube.com/v/rJR_srxmW_I&list=RDrJR_srxmW_I&start_radio=1&rv=0cCJ3jrsBhs" class="absolute block w-full h-full" type="text/html">  
        </div>  
      </div>  
    </div>  
  </section>  

  <section class="h-[500px] bg-slate-50 w-full"></section>  
</template>
<script setup>  
import { ref, onMounted } from 'vue';  
import axios from 'axios';  
import { useRouter } from 'vue-router';  

// Reactive variables to store the fetched data  
const cakes = ref([]);  
const specialcakes = ref([]);  
const cart = ref([]); // Cart array to hold added cakes
// Initialize the router  
const router = useRouter();  


// API endpoint URLs  
const cakeApiUrl = 'http://localhost:3000/cake';  
const specialCakeApiUrl = 'http://localhost:3000/specialcake';  

// Function to fetch data from both APIs  
const fetchAllCakes = async () => {  
  try {  
    const [cakesResponse, specialCakesResponse] = await Promise.all([  
      axios.get(cakeApiUrl),  
      axios.get(specialCakeApiUrl),  
    ]);  

    cakes.value = cakesResponse.data;  
    specialcakes.value = specialCakesResponse.data;  
  } catch (error) {  
    console.error('Error fetching cakes:', error);  
  }  
};  

// Fetch data when the component is mounted  
onMounted(() => {  
  fetchAllCakes();  
});  

// Function to add a cake to the cart  
const addToCart = (cake) => {  
  const existingCake = cart.value.find(item => item.id === cake.id);  
  if (existingCake) {  
    existingCake.quantity++; // Increment quantity if already in cart  
  } else {  
    cart.value.push({ ...cake, quantity: 1 }); // Add new cake with a quantity of 1  
  }  
  console.log('Cart:', cart.value); // Log cart for verification  
  alert(`${cake.name} has been added to your cart!`); // Feedback to the user  
};

// Define the goToDetail function  
const goToDetail = (id) => {  
  router.push({ name: 'cake-detail', params: { id } }); // Ensure this matches the router name  
}; 

</script>  

<style scoped>  
.bar::-webkit-scrollbar {  
  display: none;  
}  
</style>