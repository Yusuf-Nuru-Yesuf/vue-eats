import { createApp } from 'vue'
import { VueFire } from 'vuefire'
import { firebaseApp } from '@/firebase'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')

app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    ],
})