import { Technology, Live } from "@/assets/script/model"
export const GITHUB_LINK = "https://github.com/JunJieFu"
export const ZHIHU_LINK = "https://www.zhihu.com/people/xia-yu-de-bei-wei-23"
export const STEAM_LINK =
  "https://steamcommunity.com/profiles/76561198112342620/"
export const BILIBILI_LINK = "https://space.bilibili.com/65786061"

export const LIVE_LIST = [
  new Live(require("@/assets/image/github.svg"), "Github", {
    render() {
      return (
        <div>
          偶尔会上传更新一些开源项目，主要都是出于兴趣和积累经验；
          <br />
          开发语言主要为JavaScript和Kotlin，还有偶尔写写Dart，有兴趣前往
          <a href={GITHUB_LINK} target="_blank">
            Star一下
          </a>
          。
        </div>
      )
    }
  }),
  new Live(require("@/assets/image/cook.svg"), "料理", {
    render() {
      return (
        <div>
          吃货一枚，聚会时的主厨。
          <br />
          身为一个广东人，最喜欢的就是粤菜，平时做菜也是做粤菜为主，芋头扣肉、䟿鹅、豉汁蒸排骨...会煮，更会吃。
        </div>
      )
    }
  }),
  new Live(require("@/assets/image/calligraphy.svg"), "书法", {
    render() {
      return (
        <div>
          书法爱好者，总爱拿起笔写写楷，写写行。
          <br />
          主要是写硬笔吧，毛笔没有怎么去学。现阶段还是处于练习楷书的，一直入门行书却困难重重。
        </div>
      )
    }
  }),
  new Live(require("@/assets/image/zhihu.svg"), "知乎", {
    render() {
      return (
        <div>
          上知乎，分享你刚编的故事；
          <br />
          知乎故事会，越看越精彩；
          <br />
          通常都是用来消磨时间的网站，但是还是会可以发现一些宝藏答案，
          <a href={ZHIHU_LINK} target="_blank">
            关注走一波
          </a>
          。
        </div>
      )
    }
  }),
  new Live(require("@/assets/image/bilibili.svg"), "哔哩哔哩", {
    render() {
      return (
        <div>
          有时看番，有时学习，还有时候听歌。
          <br />
          B站现在已经是一个不仅仅是二次元的网站了，年轻就要逛一些年适合年轻人的网站，
          <a href={BILIBILI_LINK} target="_blank">
            Les't Go
          </a>
          。
        </div>
      )
    }
  }),
  new Live(require("@/assets/image/steam.svg"), "Steam", {
    render() {
      return (
        <div>
          AVG、RGP、ACT、RCG；只要游戏符合口味，都会尝试一下。一部冒险游戏，就像一部电影；一部角色扮演游戏，就像一部小说。
          <a href={STEAM_LINK} target="_blank">
            让我们一起去屠龙
          </a>
          。
        </div>
      )
    }
  })
]

export const TECHNOLOGY_LIST = [
  new Technology(require("@/assets/image/javascript.svg"), "JavaScript"),
  new Technology(require("@/assets/image/typescript.svg"), "TypeScript"),
  new Technology(require("@/assets/image/react.svg"), "React"),
  new Technology(require("@/assets/image/vue.svg"), "Vue"),
  new Technology(require("@/assets/image/angular.svg"), "Angular"),
  new Technology(require("@/assets/image/omi.svg"), "Omi"),
  new Technology(require("@/assets/image/nodejs.svg"), "Node"),
  new Technology(require("@/assets/image/nestjs.svg"), "Nest"),
  new Technology(require("@/assets/image/java.svg"), "Java"),
  new Technology(require("@/assets/image/kotlin.svg"), "Kotlin"),
  new Technology(require("@/assets/image/spring.svg"), "Spring Boot"),
  new Technology(require("@/assets/image/flutter.svg"), "Flutter")
]

export const APPS_LIST = [
  new Live(require("@/assets/image/github.svg"), "Github", {
    render() {
      return (
        <div>
          偶尔会上传更新一些开源项目，主要都是出于兴趣和积累经验；
          <br />
          开发语言主要为JavaScript和Kotlin，还有偶尔写写Dart，有兴趣前往
          <a href={GITHUB_LINK} target="_blank">
            Star一下
          </a>
          。
        </div>
      )
    }
  }),
  new Live(require("@/assets/image/cook.svg"), "料理", {
    render() {
      return (
        <div>
          吃货一枚，聚会时的主厨。
          <br />
          身为一个广东人，最喜欢的就是粤菜，平时做菜也是做粤菜为主，芋头扣肉、䟿鹅、豉汁蒸排骨...会煮，更会吃。
        </div>
      )
    }
  }),
  new Live(require("@/assets/image/calligraphy.svg"), "书法", {
    render() {
      return (
        <div>
          书法爱好者，总爱拿起笔写写楷，写写行。
          <br />
          主要是写硬笔吧，毛笔没有怎么去学。现阶段还是处于练习楷书的，一直入门行书却困难重重。
        </div>
      )
    }
  }),
  new Live(require("@/assets/image/zhihu.svg"), "知乎", {
    render() {
      return (
        <div>
          上知乎，分享你刚编的故事；
          <br />
          知乎故事会，越看越精彩；
          <br />
          通常都是用来消磨时间的网站，但是还是会可以发现一些宝藏答案，
          <a href={ZHIHU_LINK} target="_blank">
            关注走一波
          </a>
          。
        </div>
      )
    }
  }),
  new Live(require("@/assets/image/bilibili.svg"), "哔哩哔哩", {
    render() {
      return (
        <div>
          有时看番，有时学习，还有时候听歌。
          <br />
          B站现在已经是一个不仅仅是二次元的网站了，年轻就要逛一些年适合年轻人的网站，
          <a href={BILIBILI_LINK} target="_blank">
            Les't Go
          </a>
          。
        </div>
      )
    }
  }),
  new Live(require("@/assets/image/steam.svg"), "Steam", {
    render() {
      return (
        <div>
          AVG、RGP、ACT、RCG；只要游戏符合口味，都会尝试一下。一部冒险游戏，就像一部电影；一部角色扮演游戏，就像一部小说。
          <a href={STEAM_LINK} target="_blank">
            让我们一起去屠龙
          </a>
          。
        </div>
      )
    }
  })
]
