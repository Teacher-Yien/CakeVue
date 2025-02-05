

<template>
			<menu class="  flex justify-between ">
						<div class=" py-4 flex md:justify-start justify-between  w-[100%] ">
								<button 
									class=" xl:hidden" 
									data-drawer-target="drawer-example" 
									data-drawer-show="drawer-example" 
									data-drawer-placement="left">
								<i class=" fa fa-bars text-2xl cursor-pointer "></i>
							</button>
								<div class="  p-3 "><router-link to="/"><img class=" md:w-[100px] md:h-[100px] w-[80px] h-[80px] mx-[5rem]" src="../assets/LOGO_WEB.jpg" alt=""></router-link></div>
								<div class="hidden md:block py-10" >
								<ul class=" flex justify-center items-center  ">
								<li class=" underline"><router-link to="/gocake">Ready to Go Cakes</router-link></li>
								<li class=" hover:underline"><router-link to="/ordercake">Made to Order Cakes</router-link></li>
								<li class=" hover:underline">
										<p class=" cursor-pointer " id="dropdownDefaultButton" data-dropdown-toggle="dropdown" >Create Your Own Cakes 
											<i :class="['fa', 'fa-angle-up', 'transition-transform']"></i> </p>
										<div id="dropdown" class=" z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
											  <ul class=" p-6 border-2 border-black" aria-labelledby="dropdownDefaultButton">
														<li class=" hover:underline"><router-link to="/photocake">Photo Cake</router-link></li>
														<li class=" hover:underline"><router-link to="/dreamcake">Dream Cake</router-link></li>
													</ul>
										</div>
								</li>
								<li class=" hover:underline"><router-link to="/franches">Franchise</router-link></li>
								<li class=" hover:underline"><router-link to="/storelocator">Store Locator</router-link></li>
								<li class=" hover:underline"><router-link to="/contact">Contact Us</router-link></li>
							</ul>
						</div>
							<div class=" group-icon md:p-10  py-8 mt-2">
								<i class=" fa fa-search mx-2 text-[20px]"></i>
								<router-link to="/login">
									<i class="fa fa-user mx-2 text-[20px]"></i>
								</router-link>
								<router-link to="/payment">
									<i class="fa-solid fa-bag-shopping mx-2 text-[20px]"></i>
								</router-link>
							</div>
						</div>

						<!-- menu left -->
						<div id="drawer-example" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-label" >
							<button type="button" data-drawer-hide="drawer-example" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
										<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
													<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
										</svg>
										<span class="sr-only">Close menu</span>
							</button>
								<ul class="  justify-center items-center  ">
								<li class=" underline"><router-link to="/gocake">Ready to Go Cakes</router-link></li>
								<li class=" hover:underline"><router-link to="/ordercake">Made to Order Cakes</router-link></li>
								<li class=" hover:underline">
										<p class=" cursor-pointer " id="dropdownDefaultButton" data-dropdown-toggle="dropdown" >Create Your Own Cakes 
											<i :class="['fa', 'fa-angle-up', 'transition-transform']"></i> </p>
										<div id="dropdown" class=" z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
											  <ul class=" p-6 border-2 border-black" aria-labelledby="dropdownDefaultButton">
														<li class=" hover:underline"><router-link to="/photocake">Photo Cake</router-link></li>
														<li class=" hover:underline"><router-link to="/dreamcake">Dream Cake</router-link></li>
													</ul>
										</div>
								</li>
								<li class=" hover:underline"><router-link to="/franches">Franchise</router-link></li>
								<li class=" hover:underline"><router-link to="/storelocator">Store Locator</router-link></li>
								<li class=" hover:underline"><router-link to="/contact">Contact Us</router-link></li>
							</ul>
						</div>
						
			</menu>
</template>

<style scoped>
ul li{
	padding: 10px;
}
</style>
