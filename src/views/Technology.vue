<template>
  <v-container class="page mx-auto" ref="technology">
    <h1 class="d-flex flex-column text-center mt-12 mb-6">技术栈</h1>
    <v-row>
      <v-col cols="12" md="6" v-for="item in TECHNOLOGY_LIST" :key="item.title">
        <v-card :elevation="0" color="transparent">
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
</template>

<script>
import { TECHNOLOGY_LIST } from "./script/constant"
export default {
  data() {
    return { TECHNOLOGY_LIST }
  }
}
</script>

<style scoped></style>
