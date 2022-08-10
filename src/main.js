import { createApp } from 'vue'
//import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import router from './router';
import mainapp from './components/mainapp.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';


//createApp(App)
createApp(mainapp)

.component('BootstrapIcon', BootstrapIcon)
.use(BootstrapVue3)
.use(router)
.mount('#app')
