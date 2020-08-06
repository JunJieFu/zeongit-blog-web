<template>
  <v-container class="page mx-auto" ref="message">
    <h1 class="d-flex flex-column text-center mt-12 mb-6">留言板</h1>
    <v-img
      src="@/assets/image/empty.svg"
      class="mx-auto"
      max-width="400"
    ></v-img>
    <v-textarea
      v-model="message"
      outlined
      :auto-grow="false"
      hint="留言将会公开显示，请勿在留言内容留下个人的私密信息，谢谢合作。"
      placeholder="留下你的足迹，畅所欲言！"
    ></v-textarea>
    <div class="text-center">
      <v-btn outlined color="primary">留下足迹</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    }
  }
}
</script>

<style scoped lang="scss">
.page {
  max-width: 600px;
}
</style>
