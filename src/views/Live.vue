<template>
  <v-container class="page mx-auto">
    <h1 class="d-flex flex-column text-center mt-12 mb-6">生活</h1>
    <component
      :is="$vuetify.breakpoint.xsOnly ? 'v-carousel' : 'v-row'"
      hide-delimiter-background
      :light="!$vuetify.theme.isDark"
      height="auto"
      :continuous="false"
      :show-arrows="false"
    >
      <component
        :is="$vuetify.breakpoint.xsOnly ? 'v-carousel-item' : 'v-col'"
        v-for="(item, i) in LIVE_LIST"
        :key="i"
        cols="12"
        sm="6"
        md="4"
      >
        <div class="pb-12 pb-sm-0">
          <v-card :elevation="0" color="transparent">
            <v-card-title class="justify-center">
              <div>
                <v-img :src="item.image" :aspect-ratio="1" width="60"></v-img>
              </div>
              <span class="ml-5">
                {{ item.title }}
              </span>
            </v-card-title>
            <v-card-text class="mx-auto pt-6" style="max-width: 250px">
              <component :is="item.component"></component
            ></v-card-text>
          </v-card>
        </div>
      </component>
    </component>
  </v-container>
</template>

<script>
import { LIVE_LIST } from "@/assets/script/constant"
import { VCarousel, VCarouselItem } from "vuetify/lib/components/VCarousel"
import { VRow, VCol } from "vuetify/lib/components/VGrid"

export default {
  components: {
    "v-carousel": VCarousel,
    "v-carousel-item": VCarouselItem,
    "v-row": VRow,
    "v-col": VCol
  },
  data() {
    return {
      LIVE_LIST
    }
  }
}
</script>

<style scoped></style>
