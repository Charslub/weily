import App from './App.vue'
import router  from "./router";
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
