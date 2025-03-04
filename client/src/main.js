import { createApp } from 'vue'
import './style.css'
import "flowbite";
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue'
import router from './routes/index.js';

const  app = createApp(App);
app.use(router);
app.mount('#app')
