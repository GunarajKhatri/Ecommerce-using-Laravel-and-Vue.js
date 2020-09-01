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
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.component('pagination',require('laravel-vue-pagination'));
const store=new Vuex.Store(StoreData);
const router=new VueRouter({
	routes,
	mode:'history'
});

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('headerr', require('./components/admin/headerr.vue').default);
Vue.component('sidebar', require('./components/admin/sidebar.vue').default);
//Vue.component('login', require('./components/admin/login.vue').default);

//Vue.component('homepage', require('./components/admin/homepage.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
router.beforeEach((to,from,next)=>{
if(to.matched.some(record => record.meta.requireAuth)){
	if(!store.getters.adminloggedin){
		next({
			path:'/admin/login'
		}) 
	}
	else{
			next()  
	}
}
else if(to.matched.some(record => record.meta.requireVisitor)){
	if(store.getters.adminloggedin){
		next({
			path:'/admin/home'
		})
	}else{
		next()
	}
}
else{
	next()
}
	
	});


const admin = new Vue({
    el: '#admin',
    router ,store
});
