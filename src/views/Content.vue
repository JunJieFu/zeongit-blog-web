<template>
  <div>
    <zg-header> </zg-header>
    <v-main>
      <v-container fluid>
        <div class="page mx-auto">
          <v-row>
            <v-col cols="12" md="6">
              <v-card outlined>
                <v-card-title>
                  <div>
                    <v-img
                      src="@/assets/image/javascript.svg"
                      :aspect-ratio="1"
                      width="60"
                    ></v-img>
                  </div>
                  <span class="ml-5">
                    Javascript
                  </span>
                </v-card-title>
                <v-card-text>
                  JavaScript（简称“JS”）
                  是一种具有函数优先的轻量级，解释型或即时编译型的高级编程语言。虽然它是作为开发Web页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中，JavaScript
                  基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" class="d-flex">
              <div>
                <v-img
                  src="@/assets/image/javascript.svg"
                  :aspect-ratio="1"
                  width="65"
                ></v-img>
              </div>
              <div class="flex-grow-1 ml-2">
                <h2 class="title">Javascript</h2>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  components: {
    "zg-header": () => import("@/components/page/Header")
  }
}
</script>
<style scoped lang="scss">
@import "src/plugins/zg/style/config";
.page {
  max-width: $page-size;
}
</style>
