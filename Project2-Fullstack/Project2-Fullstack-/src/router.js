import { createRouter, createWebHistory } from 'vue-router';
import favourites from '@/views/Favourites.vue';
import cart from '@/views/Cart.vue';
import account from '@/views/Account.vue';

const routes = [
    {
      path: '/favourites',
      component: favourites
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/account',
      component: account
    }
];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;