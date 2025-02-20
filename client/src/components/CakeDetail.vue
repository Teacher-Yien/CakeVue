<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const cake = ref(null);
const specialCakes = ref(null);
const relatedCakes = ref([]); // Store related cakes
const cakeError = ref(null);
const isCakeLoading = ref(true);
const quantity = ref(1);
const route = useRoute();
const cakeApiUrl = 'http://localhost:3000/cake';
const specialCakeApiUrl = 'http://localhost:3000/specialcake';
const relatedCakesApiUrl = 'http://localhost:3000/relatedcakes'; // Update with actual API

const fetchCake = async (id) => {
  try {
    const response = await axios.get(`${cakeApiUrl}/${id}`);
    cake.value = response.data;
  } catch (error) {
    cakeError.value = 'Error fetching cake details. Please try again later.';
    console.error('Error fetching cake:', error);
  } finally {
    isCakeLoading.value = false;
  }
};

const fetchSpecialCakes = async (id) => {
  try {
    const response = await axios.get(`${specialCakeApiUrl}/${id}`);
    specialCakes.value = response.data;
  } catch (error) {
    console.error('Error fetching special cake:', error);
  }
};

const fetchRelatedCakes = async () => {
  try {
    const response = await axios.get(relatedCakesApiUrl);
    relatedCakes.value = response.data.slice(0, 4); // Limit to 4 products
  } catch (error) {
    console.error('Error fetching related cakes:', error);
  }
};

onMounted(() => {
  const cakeId = route.params.id;
  fetchCake(cakeId);
  fetchSpecialCakes(cakeId);
  fetchRelatedCakes();
});

// Show special cake if available; otherwise, show regular cake
const displayedCake = computed(() => specialCakes.value || cake.value);

const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};
</script>

<template>
  <section class="w-[80%] m-auto grid md:grid-cols-2 grid-cols-1 p-5 gap-8">
    <div class="boximg flex justify-center items-center">
      <img :src="displayedCake?.images" alt="Cake image" v-if="displayedCake" class="max-w-full h-auto rounded-lg shadow-md" />
      <p v-else-if="isCakeLoading" class="text-lg text-gray-500">Loading...</p>
      <p v-else class="text-red-500">{{ cakeError }}</p>
    </div>
    <div class="descriptions">
      <h1 class="text-[2.5rem] font-bold">{{ displayedCake?.name }}</h1>
      <p class="text-2xl text-gray-600">Price: <span class="font-semibold">RS: {{ displayedCake?.price }}.00</span></p>
      <h2 class="text-2xl font-medium my-4">Ingredient Details:</h2>
      <p class="p-5 border border-gray-300 rounded-md bg-gray-50">
        {{ displayedCake?.ingredients || 'No ingredient details available.' }}<br />
        <strong>Allergen:</strong> {{ displayedCake?.allergens || 'No allergens available.' }}
      </p>
      <div class="group-btn flex items-center mt-4 p-2 border border-gray-300 rounded justify-around">
        <button @click="decreaseQuantity" class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">-</button>
        <p class="text-lg">{{ quantity }}</p>
        <button @click="increaseQuantity" class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">+</button>
      </div>
      <div class="flex justify-between mt-6">
        <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">Add to Cart</button>
        <button class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">Proceed to Checkout</button>
      </div>
    </div>
  </section>

  <!-- Related Cakes Section -->
  <section class="w-[80%] m-auto mt-10">
    <h2 class="text-2xl font-bold mb-6">You may also like</h2>
    <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
      <div v-for="cake in relatedCakes" :key="cake.id" class="p-4 border rounded-lg shadow-md">
        <img :src="cake.images" alt="Related cake" class="w-full h-48 object-cover rounded-md" />
        <h3 class="text-xl font-semibold mt-3">{{ cake.name }}</h3>
        <p class="text-lg text-gray-600">Rs. {{ cake.price }}</p>
      </div>
    </div>
  </section>
</template>
