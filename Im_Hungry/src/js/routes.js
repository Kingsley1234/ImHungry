
import HomePage from '../pages/home.vue';
import CatalogPage from '../pages/catalog.vue';
import SettingsPage from '../pages/settings.vue';



var routes = [
  {
    path: '/',
    component: HomePage,
  },
  
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  
  {
    path: '/settings/',
    component: SettingsPage,
  },

  
];

export default routes;
