<template>
  <v-footer>
    <div class="page flex-grow-1 mx-auto">
      <v-expansion-panels
        accordion
        flat
        v-if="$vuetify.breakpoint.xsOnly"
        class="pb-4"
      >
        <v-expansion-panel
          v-for="item in FOOTER_LIST"
          :key="item.title"
          class="transparent"
        >
          <v-expansion-panel-header class="title">
            {{ item.title }}
          </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <div class="pt-4">
              <p v-for="link in item.linkList" :key="link.value">
                <a :href="link.value" :target="link.value ? '_blank' : null">{{
                  link.label
                }}</a>
              </p>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-row v-else>
        <v-col
          cols="12"
          sm="4"
          md="4"
          v-for="item in FOOTER_LIST"
          :key="item.title"
        >
          <v-card :elevation="0" color="transparent">
            <v-card-title class="justify-center">
              {{ item.title }}
            </v-card-title>
            <v-card-text class="mx-auto text-center" style="max-width: 250px">
              <p v-for="link in item.linkList" :key="link.value">
                <a :href="link.value" :target="link.value ? '_blank' : null">{{
                  link.label
                }}</a>
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!--      <v-row>-->
      <!--        <v-col cols="12" class="text-center">-->
      <!--          <a-->
      <!--            href="http://beian.miit.gov.cn/"-->
      <!--            target="_blank"-->
      <!--            rel="nofollow"-->
      <!--            class="primary-hover"-->
      <!--            >粤ICP备18144953号-1-->
      <!--          </a>-->
      <!--          <p>-->
      <!--            © 2020-2021 FuJunjie. All Rights Reserved-->
      <!--          </p>-->
      <!--        </v-col>-->
      <!--      </v-row>-->
    </div>
  </v-footer>
</template>

<script>
import { FOOTER_LIST } from "@/assets/script/constant"

export default {
  data() {
    return {
      FOOTER_LIST
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/plugins/zg/style/config";

.page {
  max-width: $page-size;
}

a {
  color: currentColor;
}
</style>
