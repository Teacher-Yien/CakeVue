<template>  
	<div class="cake-detail">  
					<h1>{{ cake.name }}</h1>  
					<img :src="cake.images" :alt="cake.name" />  
					<p>Price: Rs {{ cake.price }}</p>  
					<p>Weight: {{ cake.weight }} gms</p>  
					<p>Variants: {{ cake.variants }}</p>  
					<p>Ingredients: {{ cake.ingredients }}</p>  
	</div>  
</template>  

<script setup>  
import { defineProps } from 'vue';  

const props = defineProps({  
	cake: {  
					type: Object,  
					required: true,  
					default: () => ({  
									name: '',  
									images: '',  
									price: 0,  
									weight: 0,  
									variants: '',  
									ingredients: '',  
					}),  
	},  
});  
</script>  

<style scoped>  
/* Add your styles here */  
</style>
<!-- 
<template>  
    <div>  
        <CakeDetail :cake="cakeData" />  
    </div>  
</template>  

<script setup>  
import { ref } from 'vue';  
import CakeDetail from './CakeDetail.vue'; // Adjust the import path as necessary  

const cakeData = ref({  
    name: 'Chocolate Delight',  
    images: 'path/to/image.jpg',  
    price: 500,  
    weight: 1000,  
    variants: 'Chocolate, Vanilla, Strawberry',  
    ingredients: 'Flour, Sugar, Cocoa, Baking Powder',  
});  
</script>

-->