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

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
//Vue.component('login', require('./components/admin/login.vue').default);



const router=new VueRouter({
	routes,
	mode:'history'
});


const app = new Vue({
    el: '#adminlogin',router,store
});
