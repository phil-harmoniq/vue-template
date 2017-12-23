import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/home.vue') },
    { path: '/counter', component: require('./components/counter.vue') },
    { path: '/fetchdata', component: require('./components/fetchdata.vue') }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./app.vue'))
});
