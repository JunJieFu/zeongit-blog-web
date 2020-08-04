<template>
  <zg-app>
    <zg-header> </zg-header>
    <v-main>
      <v-container fluid>
        <div class="page mx-auto">
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
              <h5 class="text-h5">我是一只默默耕耘的小码农</h5>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              md="6"
              class="d-flex flex-column justify-center px-12 align-center align-md-end"
            >
              <h1>Hello</h1>
              <p>我是一只默默耕耘的小码农</p>
            </v-col>
            <v-col cols="12" md="6">
              <v-img
                src="@/assets/image/push.svg"
                width="80%"
                class="mx-auto"
              ></v-img>
            </v-col>
          </v-row>
          <h1 class="text-center">技术栈</h1>
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
                <v-card-text> {{ item.text }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-main>
  </zg-app>
</template>

<script>
import { TECHNOLOGY_LIST } from "./script/constant"
export default {
  components: {
    "zg-header": () => import("@/components/page/Header")
  },
  data() {
    return {
      TECHNOLOGY_LIST
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
