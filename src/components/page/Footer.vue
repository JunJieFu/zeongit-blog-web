<template>
  <v-footer>
    <div class="page flex-grow-1 mx-auto">
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-card :elevation="0" color="transparent">
            <v-card-title class="justify-center">
              找到我
            </v-card-title>
            <v-card-text class="mx-auto text-center" style="max-width: 250px">
              <p><a>Github</a></p>
              <p><a>知乎</a></p>
              <p><a>哔哩哔哩</a></p>
              <p><a>Steam</a></p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card :elevation="0" color="transparent">
            <v-card-title class="justify-center">
              相关应用
            </v-card-title>
            <v-card-text class="mx-auto text-center" style="max-width: 250px">
              <a>Zeongit Beauty</a>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card :elevation="0" color="transparent">
            <v-card-title class="justify-center">
              友情链接
            </v-card-title>
            <v-card-text class="mx-auto text-center" style="max-width: 250px">
              <a>暂时还没有哦</a>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center">
          <a
            href="http://beian.miit.gov.cn/"
            target="_blank"
            rel="nofollow"
            class="primary-hover"
            >粤ICP备18144953号-1
          </a>
        </v-col>
      </v-row>
    </div>
  </v-footer>
</template>

<script></script>

<style lang="scss" scoped>
@import "src/plugins/zg/style/config";
.page {
  max-width: $page-size;
}
a {
  color: currentColor;
}
</style>
