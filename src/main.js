// import Vue from 'vue'
// import App from './App.vue'
// import ElementUI from 'element-ui'
// import router from "./js_module/route/route";
// import 'element-ui/lib/theme-chalk/index.css'
//
// Vue.use(ElementUI);
// Vue.config.productionTip = false;
//
// new Vue({
//     render: h => h(App),
//     router,
// }).$mount('#app');

// for captcha
import Vue from 'vue';
import Captcha from './Captcha';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
    render: h => h(Captcha),
}).$mount('#app');
