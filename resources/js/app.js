/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import StoreData from './store';
import {routes} from './routes';
Vue.use(VueRouter);
Vue.use(Vuex);
const store=new Vuex.Store(StoreData);
Vue.component('pagination',require('laravel-vue-pagination'));
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('homepage', require('./components/homepage.vue').default);
Vue.component('navbar', require('./components/frontside/navbar.vue').default);
Vue.component('showproduct', require('./components/frontside/showproduct.vue').default);
Vue.component('subscri', require('./components/frontside/subscri.vue').default);
Vue.component('footersection', require('./components/frontside/footersection.vue').default);
//Vue.component('category', require('./components/frontside/category.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const router=new VueRouter({
	routes,
	mode:'history'
});

router.beforeEach((to,from,next)=>{
if(to.matched.some(record => record.meta.requireAuth)){
	if(!store.getters.loggedin){
		next({
			path:'/login'
		}) 
	}
	else{
			next()  
	}
}
else if(to.matched.some(record => record.meta.requireVisitor)){
	if(store.getters.loggedin){
		next({
			path:'/'
		})
	}else{
		next()
	}
}
else if(to.matched.some(record => record.meta.requireAuth)){
	if(!store.getters.loggedin){
		next({
			path:'/login'
		}) 
	}
	else{
			next()  
	}
}
else{
	next()
}
	
	});
const app = new Vue({
    el: '#app',router,store
});
