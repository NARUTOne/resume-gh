<template>
  <div class="home">
    <Mobile v-if="isMobile"></Mobile>
    <PC v-else></PC>
  </div>
</template>

<script>
  import PC from './pc';
  import Mobile from './mobile';
  import { Icon, Spin } from 'iview';

  export default {
    name: 'Home',
    components: {
      PC,
      Mobile,
      Icon,
      Spin
    },
    data() {
      return {
        isMobile: false
      };
    },
    mounted() {
      var width = document.documentElement.clientWidth;
      console.log(width);
      this.isMobile = width < 500 ? true : false;
    }
  };
</script>

<style lang="less" scoped>
  .home {
    
  }
</style>

