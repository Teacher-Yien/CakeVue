<script setup>  
import { ref, onMounted } from 'vue';  
import axios from 'axios';  

// Reactive variables to store the fetched data  
const cakes = ref([]);  
const specialcakes = ref([]);  

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
</script>

<template>
			<section>
						<img src="https://cdn.shopify.com/s/files/1/0633/9382/4983/files/WEBSITE_BANNER-01_1.jpg?v=1737035343" alt="">
						<h1 class=" text-3xl text-center p-5">Experience Love at First Bite. Try the Mio Amore Best Sellers!</h1>
			</section>
			<section class="bar w-[90%] m-auto overflow-x-auto h-[600px] overflow-hidden py-3">  
        <div class="flex gap-4 mt-[3rem] ">  
            <div v-for="cake in cakes.slice(0, 6)" :key="cake.id" class="card mt-5 flex-none w-[300px]">  
                <div class="cursor-pointer">
                    <img class="w-full" :src="cake.images" :alt="cake.name">  
                </div>  
                <div class="p-3">  
                    <p class="text-center text-[18px] text-black hover:text-[#6fbeff] hover:underline cursor-pointer">{{ cake.name }}</p>  
                    <p class="cursor-pointer text-[15px] text-center">Rs {{ cake.price }}</p>  
                </div>  
                <button class="w-full rounded-full h-[50px] bg-[#9d0d93] text-white text-[20px]">Add to cart</button>  
            </div>  
        </div>  
      </section>
      <section class=" mt-5 w-[90%] m-auto">
        <h1 class=" text-3xl text-center">Feeling like a cakewalk? Explore our amazing range of cakes!</h1>
        <div class="grid md:grid-cols-4 grid-cols-2 gap-2 mt-[3rem]">
        <div v-for="cake in cakes" :key="cake.id" class="card mt-5">
          <div id="boxpic" class=" w-[100%] cursor-pointer">
            <img id="pic" :src="cake.images" :alt="cake.name">
          </div>
          <div class="p-3">
            <p class="text-center text-[18px] text-black hover:text-[#6fbeff] hover:underline cursor-pointer">{{ cake.name }}</p>
            <p class="cursor-pointer text-[15px] text-center">Rs {{ cake.price }}</p>
          </div>
          <button class="w-[100%] rounded-full h-[50px] bg-[#9d0d93] text-white text-[20px]">Add to cart</button>
        </div>
      </div>
      </section>
      <!--  specialcakes-->
      <section class=" mt-5">
          <h1 class=" text-3xl text-center">A special cake for all seasons and reasons!</h1>
          <article class="bar w-[90%] m-auto overflow-x-auto h-[600px] overflow-hidden py-3">  
            <div class="flex gap-4 mt-[3rem] ">  
                <div v-for="cake in specialcakes" :key="cake.id" class="card mt-5 flex-none w-[300px]">  
                    <div class="cursor-pointer">
                        <img class="w-full" :src="cake.images" :alt="cake.name">  
                    </div>  
                    <div class="p-3">  
                        <p class="text-center text-[18px] text-black hover:text-[#6fbeff] hover:underline cursor-pointer">{{ cake.name }}</p>  
                        <p class="cursor-pointer text-[15px] text-center">Rs {{ cake.price }}</p>  
                    </div>  
                    <button class="w-full rounded-full h-[50px] bg-[#9d0d93] text-white text-[20px]">Add to cart</button>  
                </div>  
            </div>  
          </article>
      </section>
      <!-- video -->
      <section class=" mt-7 w-[90%]  m-auto ">
      <h1 class=" text-3xl text-center">Our latest films</h1>
      <div id="default-carousel" class="relative w-full bg-gray-300 mt-8 h-[600px]" data-carousel="slide">
          <!-- Carousel wrapper -->
          <div class="relative  overflow-hidden rounded-lg md:h-full">
              <!-- Item 1 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <embed src="https://www.youtube.com/v/0bIRwBpBcZQ" class="absolute block w-full h-full  " type="">
              </div>
              <!-- Item 2 -->
              <div class="hidden duration-700 ease-in-out " data-carousel-item>
                  
                   <embed src="https://www.youtube.com/v/0cCJ3jrsBhs" class="absolute block w-full h-full  " type="">
              </div>
              <!-- Item 3 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  
                  <embed src="https://www.youtube.com/v/rJR_srxmW_I&list=RDrJR_srxmW_I&start_radio=1&rv=0cCJ3jrsBhs" class="absolute block w-full h-full " type="">
              </div>
              
          </div>
          <!-- Slider indicators -->
          <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          </div>
          <!-- Slider controls -->
          <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                  </svg>
                  <span class="sr-only">Previous</span>
              </span>
          </button>
          <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span class="sr-only">Next</span>
              </span>
          </button>
      </div>
      </section>
      <section class=" h-[500px] bg-slate-50 w-full"></section>
</template>
<style scoped>
.bar::-webkit-scrollbar {
  display: none;
}
</style>
