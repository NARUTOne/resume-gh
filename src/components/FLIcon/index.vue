<template>
  <i :class='classes'></i>
</template>

<script>
const prefixCls = 'icon';
const iconCls = 'iconfont';

export default {
  name: 'FLIcon',
  props: {
    type: {
      type: String,
      required: true
    },
    htmlClass: String
  },
  computed: {
    classes() {
      return `${iconCls} ${prefixCls}-${this.type} ${this.htmlClass}`;
    }
  }
};
</script>

<style lang="less" scoped>
@import '~utils/style/variables.less';

@font-face {
  font-family: "iconfont";
  src: url('@{flv-my-icon-url}.eot'); /* IE9*/
  src:
  /* chrome、firefox */
  url('@{flv-my-icon-url}.woff') format('woff'),
  /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('@{flv-my-icon-url}.ttf') format('truetype'),
  /* iOS 4.1- */
  url('@{flv-my-icon-url}.svg#iconfont') format('svg');
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-clothes:before { content: "\e62d"; }

.icon-food:before { content: "\e7bd"; }

.icon-homebig:before { content: "\e6c8"; }

.icon-travel:before { content: "\e839"; }

.icon-accessory:before { content: "\e6dd"; }

.icon-activity_fill:before { content: "\e6de"; }

.icon-add:before { content: "\e6df"; }

.icon-addpeople_fill:before { content: "\e6e1"; }

</style>

