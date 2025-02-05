import { createRouter, createWebHistory } from "vue-router"
import ReadytoGoCakes from "../pages/ReadytoGoCakes.vue";

const routes = [
	{ path:"/",name:"Home",components:''},
	{ path:"/gocake",name:"Ready to Go Cakes",component:ReadytoGoCakes},
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