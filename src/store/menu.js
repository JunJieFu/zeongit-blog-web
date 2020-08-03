import Vue from "vue"
import Vuex from "vuex"
import storageUtil from "@/plugins/zg/script/util/storage"
Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    collapse: storageUtil.localGet("beauty::menu::collapse", false),
    progress: false,
    dark: storageUtil.localGet("beauty::menu::dark", false)
  },
  mutations: {
    MUpdateCollapse(state, collapse) {
      storageUtil.localSet("beauty::menu::collapse", collapse)
      state.collapse = collapse
    },
    MUpdateProgress(state, progress) {
      state.progress = progress
    },
    MUpdateDark(state, dark) {
      storageUtil.localSet("beauty::menu::dark", dark)
      window.app.$vuetify.theme.isDark = dark
      state.dark = dark
    }
  },
  actions: {}
}
