import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import AdocaoPet from './pages/adocaoPet.vue';
import ProcessoAdocao from './pages/Processo.vue';
import CadastroAnimal from './pages/CadastroAnimal.vue';
import AreaAdotante from './pages/AreaAdotante.vue';
// import Contato from './pages/Contato.vue'; // Removido pois não existe

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/adocao', component: AdocaoPet },
  { path: '/processo', component: ProcessoAdocao },
  { path: '/cadastro-animal', component: CadastroAnimal },
  { path: '/area-adotante', component: AreaAdotante },
  // { path: '/contato', component: Contato }, // Removido pois não existe
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router; 