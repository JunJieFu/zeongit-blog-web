<template>
  <zg-app>
    <zg-header> </zg-header>
    <v-main>
      <v-container class="page mx-auto">
        <v-row>
          <v-col cols="12" md="6">
            <v-img
              src="@/assets/image/mac.svg"
              width="60%"
              class="mx-auto"
            ></v-img>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="d-flex flex-column justify-center px-12 align-center align-md-start"
          >
            <h2 class="text-h2">Hello</h2>
            <h5 class="text-h5 ">我是一只默默耕耘的小码农</h5>
          </v-col>
        </v-row>
      </v-container>
      <v-divider class="d-md-none" />
      <v-container class="page mx-auto">
        <h1 class="d-flex flex-column text-center mt-12 mb-6">生活</h1>
        <component
          :is="$vuetify.breakpoint.smAndDown ? 'v-carousel' : 'v-row'"
          hide-delimiter-background
          light
          height="auto"
          :show-arrows="false"
        >
          <component
            :is="$vuetify.breakpoint.smAndDown ? 'v-carousel-item' : 'v-col'"
            v-for="(item, i) in LIVE_LIST"
            :key="i"
            cols="12"
            md="4"
          >
            <div class="pb-12 pb-md-0">
              <v-card :elevation="0">
                <v-card-title class="justify-center">
                  <div>
                    <v-img
                      :src="item.image"
                      :aspect-ratio="1"
                      width="60"
                    ></v-img>
                  </div>
                  <span class="ml-5">
                    {{ item.title }}
                  </span>
                </v-card-title>
                <v-card-text class="text-center"> {{ item.text }}</v-card-text>
                <v-card-actions class="justify-center">
                  <v-btn text color="primary">Go 前往看看</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </component>
        </component>
      </v-container>
      <v-container class="page mx-auto">
        <h1 class="d-flex flex-column text-center mt-12 mb-6">技术栈</h1>
        <v-row>
          <v-col
            cols="12"
            md="6"
            v-for="item in TECHNOLOGY_LIST"
            :key="item.title"
          >
            <v-card outlined>
              <v-card-title>
                <div>
                  <v-img :src="item.image" :aspect-ratio="1" width="60"></v-img>
                </div>
                <span class="ml-5">
                  {{ item.title }}
                </span>
              </v-card-title>
              <v-card-text> {{ item.text }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </zg-app>
</template>

<script>
import { TECHNOLOGY_LIST, LIVE_LIST } from "./script/constant"
import { VCarousel, VCarouselItem } from "vuetify/lib/components/VCarousel"
export default {
  components: {
    "zg-header": () => import("@/components/page/Header"),
    "v-carousel": VCarousel,
    "v-carousel-item": VCarouselItem
  },
  data() {
    return {
      TECHNOLOGY_LIST,
      LIVE_LIST
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
