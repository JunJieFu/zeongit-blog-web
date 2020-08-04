<template>
  <v-app-bar app clipped-left elevate-on-scroll>
    <v-tooltip bottom :disabled="$isMobile">
      <template v-slot:activator="{ on }">
        <v-app-bar-nav-icon
          :small="$vuetify.breakpoint.xsOnly"
          @click="collapse = !collapse"
          v-on="on"
        />
      </template>
      <span>主菜单</span>
    </v-tooltip>
    <router-link
      to="/"
      class="title ml-2 d-md-block d-none text-no-wrap"
      v-show="$vuetify.breakpoint.mdAndUp"
      style="line-height: 1.5em"
    >
      Zeongit
      <span class="font-weight-light ml-1">空间</span>
    </router-link>
    <v-spacer />
    <v-tabs v-model="activeTab" right show-arrows>
      <v-tab v-for="item in tabs" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-divider class="header-divider" />
  </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from "vuex"
export default {
  computed: {
    collapse: {
      get() {
        return this.$store.state.menu.collapse
      },
      set(val) {
        this.MUpdateCollapse(val)
      }
    },
    ...mapState("user", ["info"])
  },
  methods: {
    ...mapMutations("menu", ["MUpdateCollapse"])
  },
  data() {
    return {
      activeTab: "欢迎",
      tabs: ["欢迎", "生活", "技术", "留言"]
    }
  }
}
</script>

<style lang="scss" scoped>
.header-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
