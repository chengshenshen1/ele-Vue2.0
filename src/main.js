// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import App from './App';

import './common/less/style.less';

Vue.use(VueRouter);
Vue.use(vueResource);
/* eslint-disable no-new */
const routes = [
	// { path: '/', redirect: { path: '/goods' } },
	// { path: '/', redirect: '/goods' },
  // { path: '/goods', component: goods },
  // { path: '/ratings', component: ratings },
  // { path: '/seller', component: seller }
];

const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
	linkActiveClass: 'active' // 默认class为router-link-active
});

new Vue({
  router,
	template: '<App></App>',
	components: { App }		// 也可以用下面的render函数初始化
	// render: item => item(App)
}).$mount('#app');
