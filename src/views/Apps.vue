<template>
  <v-container class="page mx-auto mt-12">
    <v-row>
      <v-col
        cols="12"
        md="6"
        class="d-flex flex-column justify-center px-12 align-center align-sm-start"
      >
        <h1 class="d-flex flex-column mt-12 mb-6">Zeongit Beauty</h1>
        <h6 class="text-h6">
          这是我仿照Pixiv设计的一个网站，用来保存一些好看的插画。
          <br />
          做这个网站的初衷是借着项目的过程不断提高自己的编程水平。
          <br />
          虽然现阶段还有很多不完善，但我会继续维护，未完待续...
        </h6>
        <h1 class="d-flex flex-column mt-12 mb-6">
          <v-btn
            outlined
            color="primary"
            :href="$config.BEAUTY_HOST"
            target="_blank"
            >一探究竟</v-btn
          >
        </h1>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="@/assets/image/apps_beauty.png"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//   免责声明：本站部分内容来源于网络，图片版权属于原作者，本站转载仅供大家交流学习，切勿用于任何商业用途；本站不承担用户因使用这些资源对自己和他人造成任何形式的损害或伤害；
// 如果侵犯了您的合法权益，请您及时与我们联系，我们会在第一时间删除相关内容。
// import { APPS_LIST } from "./script/constant"
// import { VCarousel, VCarouselItem } from "vuetify/lib/components/VCarousel"
// import { VRow, VCol } from "vuetify/lib/components/VGrid"

export default {
  // components: {
  //   "v-carousel": VCarousel,
  //   "v-carousel-item": VCarouselItem,
  //   "v-row": VRow,
  //   "v-col": VCol
  // },
  // data() {
  //   return {
  //     APPS_LIST
  //   }
  // }
}
</script>

<style scoped></style>
