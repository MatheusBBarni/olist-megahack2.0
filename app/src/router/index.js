import Vue from 'vue';
import VueRouter from 'vue-router';
import Listar from '../views/Listar.vue';
import CriarEditar from '../views/CriarEditar.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Listar',
		component: Listar,
	},
	{
		path: '/criar',
		name: 'Criar',
		component: CriarEditar,
	},
	{
		path: '/editar/:id',
		name: 'Editar',
		component: CriarEditar,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
