<template>
  <section>
    <cube-slide class="slide" :threshold="0">
      <cube-slide-item>
        <icon-nav></icon-nav>
      </cube-slide-item>
      <cube-slide-item>
        <icon-nav></icon-nav>
      </cube-slide-item>

    </cube-slide>

    <div>12345</div>
  </section>
</template>

<script>

  import BScroll from 'better-scroll'
  import IconNav from '~/views/index/IconNav'

  export default {

    components: {
      IconNav
    },

    methods: {
      showDialog() {
      }
    },
    data: function () {
      return {


      }
    }
  }

</script>

<style scoped>

</style>
