import { createApp } from 'vue'
import App from './App.vue'
import InstantSearch from 'vue-instantsearch/vue3/es';

import router from './router/router.ts'


createApp(App)
    .use(InstantSearch)
    .use(router)
    .mount('#app')
