import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import vSelect from 'vue-select';

import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/scss/style.scss';
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueAxios, axios);

Vue.component('v-select', vSelect);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
