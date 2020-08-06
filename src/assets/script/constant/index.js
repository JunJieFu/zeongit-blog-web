import { Technology, Live, LabelValue, Footer } from "@/assets/script/model"
import { BEAUTY_HOST } from "@/plugins/zg/script/constant/config"

export const HEADER_TAB_LIST = [
  new LabelValue("欢迎", "welcome"),
  new LabelValue("生活", "live"),
  new LabelValue("技术", "technology"),
  new LabelValue("应用", "apps"),
  new LabelValue("留言", "message")
]

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
  new Technology(
    require("@/assets/image/javascript.svg"),
    "JavaScript",
    "在大学中，我所选的方向就是前端开发，所以这门语言差不多算是最熟悉的语言了。从ES2015到ES2020，JavaScript的语法越来越简便，开发起来的感觉也是不可同日而语。"
  ),
  new Technology(
    require("@/assets/image/typescript.svg"),
    "TypeScript",
    "最初接触这门语言主要想玩一下Ionic2，但是这门语言热度还没有现在火爆。它是JavaScript的超集，提供了许多JavaScript没有正式发布的新特性，所以这门语言未来的前景肯定是比JavaScript要好的，我们来共同期待一下。"
  ),
  new Technology(
    require("@/assets/image/react.svg"),
    "React",
    "接触React就无可避免地接触了JSX，在一开始接触JSX的时候对语法感到有点抗拒就一直没有系统地去学习，但是后来慢慢还是接受了JSX的语法，虽然没有特别喜欢，但也不抗拒。现在虽然不是很熟悉，但开发个小应用还是没问题哒。继续努力。"
  ),
  new Technology(
    require("@/assets/image/vue.svg"),
    "Vue",
    "这个框架可能是我在工作和自己项目中用得最多的一个框架吧，得益于它的简单，它的社区完善，虽然它在2.x还存在一些弊病，譬如对TypeScript支持不友好、mixin来源不清晰等，但是在3.x会得到一个很好的处理，nice。"
  ),
  new Technology(
    require("@/assets/image/angular.svg"),
    "Angular",
    "接触Angular也是通过Ionic2，它拥抱TypeScript，迭代速度极快，它借鉴了诸多后台开发设计，譬如依赖注入、装饰器等，但这就注定了它的学习成本高。还有很多人吐槽它过于庞大，不如Vue小巧，试问谁用Vue不是用全家桶的呢。共同努力吧。"
  ),
  new Technology(
    require("@/assets/image/omi.svg"),
    "Omi",
    "一次偶然的机会，在逛Github的我发现了这个KPI框架，可能很多人都没有听过吧，它是由腾讯开发的一个前端框架，主要是使用JSX，听起来是不是跟React很像，但是渲染模式它是使用了Shadow DOM，这就很有意思了。它的生态基本没有，所以用于生产基本不可能，但是它有一个妙用，就是代替iframe，特别适合写一些注入，嘻嘻嘻。"
  ),
  new Technology(
    require("@/assets/image/nodejs.svg"),
    "Node",
    "作为一名前端，不会点Nodejs都不好意思开口说是个前端了，Nodejs是一个基于Chrome V8引擎的JavaScript运行环境，它得益于JavaScript的简单，所以在一些有规律可寻的操作，写一些Nodejs脚本来处理还是挺方便的。"
  ),
  new Technology(
    require("@/assets/image/nestjs.svg"),
    "Nest",
    "Github按照我的口味给我推荐的一个框架，用TypeScript开发的一个Nodejs后台框架，借鉴了Spring Boot和Angular的设计灵感，可以说就是Nodejs版的Spring Boot。那么问题来了，我为什么不直接用Spring Boot呢？"
  ),
  new Technology(
    require("@/assets/image/java.svg"),
    "Java",
    "在大学的时候就已经使用过Java了，但是那个时候不喜欢它，觉得它太啰嗦了，还有静态类型有点接受不了。后来发现，我还是太年轻了，静态类型在重构的时候大大减轻了开发的负担，所以，真香。"
  ),
  new Technology(
    require("@/assets/image/kotlin.svg"),
    "Kotlin",
    "现阶段我主要用来开发后台的语言，它可以编译成JVM字节码，所以它是跟Java完全兼容的，这就意味着它能拥有Java的整个生态，但是它比Java安全，简便。有着写了就回不去的感觉，我只想说一句，Kotlin是世界上最好的语言。"
  ),
  new Technology(
    require("@/assets/image/spring.svg"),
    "Spring Boot",
    "在众多框架中，Spring Boot一下击中了我的口味，AOP，静态类型，反射，我想要的它都有，它的功能也十分全面，再加上Java的生态，Kotlin语言的优势，简直完美。"
  ),
  new Technology(
    require("@/assets/image/flutter.svg"),
    "Flutter",
    "Google开发的跨平台移动开发框架，但是它的代码实在是太过于反人类，嵌套还是嵌套。不过写过一阵子之后还是慢慢习惯了，它虽然现阶段生态不如React Native，但是它将来必定是跨平台的大趋势，挺看好的，先踩踩坑吧！"
  )
]

export const FOOTER_LIST = [
  new Footer("找到我", [
    new LabelValue("Github", GITHUB_LINK),
    new LabelValue("知乎", ZHIHU_LINK),
    new LabelValue("哔哩哔哩", BILIBILI_LINK),
    new LabelValue("Steam", STEAM_LINK)
  ]),
  new Footer("相关应用", [new LabelValue("Zeongit Beauty", BEAUTY_HOST)]),
  new Footer("友情链接", [new LabelValue("暂时还没有", null)])
]
