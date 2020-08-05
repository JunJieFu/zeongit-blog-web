<template>
  <zg-app>
    <zg-header v-model="tab" @change-tab="changeTab"> </zg-header>
    <v-main v-scroll="onScroll">
      <div ref="welcome">
        <welcome></welcome>
      </div>
      <v-divider class="d-md-none" />
      <div ref="live">
        <live></live>
      </div>
      <v-divider class="d-md-none" />
      <div ref="technology">
        <technology></technology>
      </div>
      <v-divider class="d-md-none" />
      <div ref="apps">
        <apps></apps>
      </div>
      <v-divider class="d-md-none" />
      <div ref="message">
        <message></message>
      </div>
    </v-main>
  </zg-app>
</template>

<script>
import { HEADER_TAB_LIST } from "@/assets/script/constant"
export default {
  components: {
    "zg-header": () => import("@/components/page/Header"),
    welcome: () => import("@/views/Welcome"),
    live: () => import("@/views/Live"),
    technology: () => import("@/views/Technology"),
    apps: () => import("@/views/Apps"),
    message: () => import("@/views/Message")
  },
  data() {
    return {
      HEADER_TAB_LIST,
      tab: 0
    }
  },
  methods: {
    changeTab(index) {
      this.$vuetify.goTo(this.$refs[HEADER_TAB_LIST[index].value])
    },
    onScroll({ target }) {
      const { documentElement } = target
      const offsetTopList = HEADER_TAB_LIST.map(
        (it) => this.$refs[it.value].offsetTop
      )
      let tabs = offsetTopList.filter((it) => it <= documentElement.scrollTop)
      this.tab = tabs.length - 1
    }
  }
}
</script>
<style scoped lang="scss">
@import "src/plugins/zg/style/config";
.page {
  max-width: $page-size;
}
</style>
