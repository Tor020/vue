import Vue from 'vue';
Vue.config.productionTip = false;

import Root from './components/Root'; //Must capitalize Component

import test from './secondary'; //importing js function from secondary

import style from './sass/style.scss'; 

test('yea boi'); 

new Vue({
  el:'#root',  // target element
  template:`<root/>`, // how you pass props
  components: { Root } //required to output template
})

// new Vue({
//   router,
//   render: h => h(Root)
// }).$mount('#root')y
