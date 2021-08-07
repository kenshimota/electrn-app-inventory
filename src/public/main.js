'use strict'

import routes from './routes.js'; 
const router = new VueRouter({ routes: routes });

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  router: router
});
