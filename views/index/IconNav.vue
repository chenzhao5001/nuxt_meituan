<template>
  <div>
    <div class="wrap" v-cloak>
      <div class="inner iconfont" v-for="(item,index) in items" :key="index">
        <div class="icon-shell" :style="item.cell_style">
          <span :class="item.icon_font"></span>
        </div>
        <p>{{item.info}}</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "IconNav",
    // props: ['items'],
    data:function () {
      return {
        items: [
          {
            "icon_font": "meishi",
            "url": "",
            "info": "美食",
            "cell_style": "background-color:orange",
          },
          {
            "icon_font": "maoyandianying",
            "url": "",
            "info": "猫眼电影",
            "cell_style": "background-color:orange",
          },
          {
            "icon_font": "jiudan",
            "url": "",
            "info": "酒店",
            "cell_style": "background-color:orange",
          },
          {
            "icon_font": "xiuxianyule",
            "url": "",
            "info": "休闲娱乐",
            "cell_style": "background-color:orange",
          },
          {
            "icon_font": "waimai",
            "url": "",
            "info": "外卖",
            "cell_style": "background-color:orange",
          },
          {
            "icon_font": "ktv",
            "url": "",
            "info": "ktv",
            "cell_style": "background-color:orange",
          },
          {
            "icon_font": "zhoubianyou",
            "url": "",
            "info": "周边游",
            "cell_style": "background-color:orange",
          },
          {
            "icon_font": "liren",
            "url": "",
            "info": "丽人",
            "cell_style": "background-color:orange",
          },
          {
            "icon_font": "xiaochikuaican",
            "url": "",
            "info": "小吃快餐",
            "cell_style": "background-color:orange",
          },
          {
            "icon_font": "shenghuofuwu",
            "url": "",
            "info": "生活服务",
            "cell_style": "background-color:orange",
          },
        ],
      }

    }
  }
</script>

<style scoped>

  [v-cloak] {
    display: none;
  }
  .test {
    background: green;
    height: 10px;
    width: 7rem;
  }

  .wrap {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 50% 50%;
  }

  .inner {
    margin-top: .15rem;
  }


  .icon-shell {
    font-size:.8rem;
    margin:0 auto;
    display:block;
    text-align:center;
    border:1px solid red;
    border-radius: .5rem;
    line-height:1rem;
    height:1rem;
    width: 1rem;
  }

  .inner p {
    margin-top: .1rem;
    text-align: center;
    font-size: .20rem;
  }
  .iconfont {
    font-family: 图标字体 !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .meishi::before {
    content: "\e603";
  }

  .maoyandianying::before {
    content: "\e692"
  }

  .jiudan::before {
    content: "\e602"
  }

  .xiuxianyule::before {
    content: "\e617"
  }

  .waimai::before {
    content: "\e61a"
  }

  .ktv::before {
    content: "\e606"
  }


  .zhoubianyou::before {
    content: "\e605"
  }

  .liren::before {
    content: "\e612"
  }

  .xiaochikuaican::before {
    content: "\e619"
  }

  .shenghuofuwu::before {
    content: "\e601"
  }

</style>
