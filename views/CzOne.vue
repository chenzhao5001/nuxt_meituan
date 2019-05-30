<template>
  <div class="wrap">
    <span class="iconfont meishi">111</span>
    <span class="iconfont maoyandianying">111</span>
    <h1>cz one</h1>
    <nuxt-link to="/">首页</nuxt-link>
  </div>
</template>

<script>
  export default {
    name: "CzOne"
  }
</script>

<style scoped>
  .iconfont {
    font-family: 图标字体 !important;
    font-size: 16px;
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
