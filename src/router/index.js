import { createWebHistory, createRouter } from 'vue-router';
import Question from '../views/Question.vue';
import About from '../views/About.vue';
import Guidance from '../views/Guidance.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Question,
  },
  {
    path: '/guidance',
    name: 'Guidance',
    component: Guidance,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;