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
      下雨的北纬23°
    </router-link>
    <v-spacer />
    <v-tabs :value="value" right show-arrows @change="changeTab">
      <v-tab v-for="item in HEADER_TAB_LIST" :key="item.value">
        {{ item.label }}
      </v-tab>
    </v-tabs>
    <v-divider class="header-divider" />
  </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from "vuex"
import { HEADER_TAB_LIST } from "@/assets/script/constant"
export default {
  model: {
    prop: "value",
    event: "changeTab"
  },
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      HEADER_TAB_LIST
    }
  },
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
    ...mapMutations("menu", ["MUpdateCollapse"]),
    changeTab(e) {
      this.$emit("change-tab", e)
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
