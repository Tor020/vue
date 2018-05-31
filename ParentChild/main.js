import Vue from 'vue';
Vue.config.productionTip = false;
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './sass/style.scss'; 


import Root from './Root'; 


new Vue({ render: h => h(Root) })
.$mount('#root')



