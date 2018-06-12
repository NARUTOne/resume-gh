<template>
  <div class="pc">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
import {StyleEditor, ResumeEditor} from '@/components/';
import {STYLE_MOCK} from '@/mock/styleMock';
import {INFO_MOCK} from '@/mock/infoMock';

export default {
  name: 'PC',
  components: {StyleEditor, ResumeEditor},
  data() {
    return {
      interval: 40,
      currentStyle: '',
      enableHtml: false,
      fullStyle: STYLE_MOCK,
      currentMarkdown: '',
      fullMarkdown: INFO_MOCK
    };
  },
  created() {
      this.makeResume();
    },
    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0);
        await this.progressivelyShowResume();
        await this.progressivelyShowStyle(1);
        await this.showHtml();
        await this.progressivelyShowStyle(2);
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true;
          resolve();
        });
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          const interval = this.interval;
          const showStyle = (async function () {
            const style = this.fullStyle[n];
            if (!style) { return; }
            // 计算前 n 个 style 的字符总数
            const length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0);
            const prefixLength = length - style.length;
            if (this.currentStyle.length < length) {
              const l = this.currentStyle.length - prefixLength;
              const char = style.substring(l, l + 1) || ' ';
              this.currentStyle += char;
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom();
                });
              }
              setTimeout(showStyle, interval);
            } else {
              resolve();
            }
          }).bind(this);
          showStyle();
        });
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          const length = this.fullMarkdown.length;
          const interval = this.interval;
          const showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1);
              const lastChar = this.currentMarkdown[this.currentMarkdown.length - 1];
              const prevChar = this.currentMarkdown[this.currentMarkdown.length - 2];
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom());
              }
              setTimeout(showResume, interval);
            } else {
              resolve();
            }
          };
          showResume();
        });
      }
    }
};
</script>

<style lang="less" scoped>

</style>

