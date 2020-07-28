import Vue from "vue"
import App from "@/App"

import router from "@/router"
import store from "@/store"

import vuetify from "@/plugins/vuetify"
import "@/plugins/zg/style/index.scss"
import "@/plugins/zg/style/variables.scss"
import zg from "@/plugins/zg"
Vue.use(zg)

Vue.config.productionTip = false
window.app = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app")
