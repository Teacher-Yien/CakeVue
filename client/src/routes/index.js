import { createRouter, createWebHistory } from "vue-router"
import ReadytoGoCakes from "../pages/ReadytoGoCakes.vue";
import Home from "../pages/Home.vue";
// import CakeDetail from "../components/CakeDetail.vue";

const routes = [
	{ path:"/",name:"Home",component:Home},
	{ path:"/gocake",name:"Ready to Go Cakes",component:ReadytoGoCakes},
	{
		path: '/cake/:id',
		name: 'cake-detail', // Ensure this name matches what you're trying to use  
		component: () => import('../components/CakeDetail.vue'), // Adjust the path as necessary  
	},
	{ path:"/ordercake",name:"Order Cakes",components:''},
	{ path:"/photocake",name:"Create your own Cakes",component:''},
	{ path:"/dreamcake",name:"Create your own Cakes",component:''},
	{ path:"/franches",name:"franches",component:''},
	{ path:"/storelocator",name:"StoreLocator",component:''},
	{ path:"/contact",name:"contact",component:''},
]
const router = createRouter(
		{ history: createWebHistory(), routes}
);
export default router