import { Technology } from "@/assets/script/model"

export const TECHNOLOGY_LIST = [
  new Technology(
    require("@/assets/image/javascript.svg"),
    "JavaScript",
    "JavaScript（简称“JS”）是一种具有函数优先的轻量级，解释型或即时编译型的高级编程语言。虽然它是作为开发Web页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中，JavaScript基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。"
  ),
  new Technology(
    require("@/assets/image/typescript.svg"),
    "TypeScript",
    "TypeScript是一种由微软开发的开源、跨平台的编程语言。它是JavaScript的超集，最终会被编译为JavaScript代码。TypeScript添加了可选的静态类型系统、很多尚未正式发布的ECMAScript新特性（如装饰器 [1]  ）。2012年10月，微软发布了首个公开版本的TypeScript，2013年6月19日，在经历了一个预览版之后微软正式发布了正式版TypeScript。"
  )
]

export const LIVE_LIST = [
  new Technology(
    require("@/assets/image/github.svg"),
    "Github",
    "时而撸撸代码"
  ),
  new Technology(
    require("@/assets/image/bilibili.svg"),
    "Bilibili",
    "时而看看节目"
  ),
  new Technology(require("@/assets/image/steam.svg"), "Steam", "时而玩玩游戏")
]
