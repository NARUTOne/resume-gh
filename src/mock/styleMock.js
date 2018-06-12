/**
 * style mock
 */
export const STYLE_MOCK = [`/*
  * Inspired by http://strml.net/ - PC
  * 大家好，我是NARUTOne
  * 现在，好多公司都在招聘，你是不是也在准备简历呀。
  * 说做就做，我也来写一份简历！
  */
  /* 首先给所有元素加上过渡效果 */
  * {
    transition: all .3s;
  }
  /* 白色背景太单调了，我们来点背景 */
  .styleEditor {
    color: rgb(222,222,222); 
    background: rgb(0,43,54);
  }
  /* 文字离边框太近了 */
  .styleEditor {
    padding: .5em;
    border: 1px solid;
    margin: .5em;
    overflow: auto;
    width: 45vw; 
    height: calc(100vh - 120px);
  }
  /* 代码高亮 */
  .token.selector{ color: rgb(133,153,0); }
  .token.property{ color: rgb(187,137,0); }
  .token.punctuation{ color: yellow; }
  .token.function{ color: rgb(42,161,152); }
  /* 加点 3D 效果呗 */
  html{
    perspective: 1000px;
  }
  .styleEditor {
    position: fixed;
    left: 0;
    top: 60px;
    -webkit-transition: none;
    transition: none;
    -webkit-transform: rotateY(10deg) translateZ(-100px) ;
            transform: rotateY(10deg) translateZ(-100px) ;
  }
  /* 接下来我给自己准备一个编辑器 */
  .resumeEditor{
    position: fixed; 
    right: 0; 
    top: 60px;
    padding: .5em;  
    margin: .5em;
    width: 48vw; 
    height: calc(100vh - 120px);
    border: 1px solid;
    background: white; color: #222;
    overflow: auto;
  }
  /* 好了，我开始写简历了 */
  `,
  `
  /* 这个简历好像差点什么
  * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
  * 简单，用开源工具翻译成 HTML 就行了
  */
  `
            ,
            `
  /* 再对 HTML 加点样式 */
  .resumeEditor{
    padding: 1em;
  }
  .resumeEditor h2{
    display: inline-block;
    border-bottom: 1px solid;
    margin: 1em 0 .5em;
  }
  .resumeEditor ul,.resumeEditor ol{
    list-style: none;
  }
  .resumeEditor ul> li::before{
    content: '•';
    margin-right: .5em;
  }
  .resumeEditor ol {
    counter-reset: section;
  }
  .resumeEditor ol li::before {
    counter-increment: section;
    content: counters(section, ".") " ";
    margin-right: .5em;
  }
  .resumeEditor blockquote {
    margin: 1em;
    padding: .5em;
    background: #ddd;
  }
`];

export const MOBILE_STYLE_MOCK = [
  `/*
  * Inspired by http://strml.net/ - Mobile
  * 大家好，我是NARUTOne
  * 现在，好多公司都在招聘
  * 你是不是也在准备简历呀。
  * 说做就做，我也来写一份简历！
  */
  /* 首先给所有元素加上过渡效果 */
  * {
  transition: all .3s;
  }
  /* 白色背景太单调了，我们来点背景 */
  .styleEditor {
    color: rgb(222,222,222);
    background: rgb(0,43,54);
  }
  /* 文字离边框太近了 */
  .styleEditor {
    padding: .5em;
    border: 1px solid;
    overflow: auto;
    width: 90vw;
    margin: 1.5vh 5vw;
    height: 90vh;
  }
  /* 太高了 */
  .styleEditor {
    height: 45vh;
  }
  /* 代码高亮 */
  .token.selector{
    color: rgb(133,153,0);
  }
  .token.property{
    color: rgb(187,137,0);
  }
  .token.punctuation{
    color: yellow;
  }
  .token.function{
    color: rgb(42,161,152);
  }
  /* 加点 3D 效果呗 */
  html{
    perspective: 1000px;
  }
  .styleEditor {
    position: fixed; 
    left: 0; 
    top: 60;
    transform: rotateX(-10deg) translateZ(-50px) ;
  }
  /* 接下来我给自己准备一个编辑器 */
  .resumeEditor{
    position: fixed;
    top: 50%; 
    left: 0;
    padding: .5em;  margin: 2.5vh;
    width: 95vw; 
    height: 45vh;
    border: 1px solid;
    background: white; color: #222;
    overflow: auto;
  }
  /* 好了，我开始写简历了 */
  `,
    `
  /* 这个简历好像差点什么
  * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
  * 简单，用开源工具翻译成 HTML 就行了
  */
  `
    ,
    `
  /* 再对 HTML 加点样式 */
  .resumeEditor{
    padding: 1em;
  }
  .resumeEditor h2{
    display: inline-block;
    border-bottom: 1px solid;
    margin: 1em 0 .5em;
  }
  .resumeEditor ul,.resumeEditor ol{
    list-style: none;
  }
  .resumeEditor ul> li::before{
    content: '•';
    margin-right: .5em;
  }
  .resumeEditor ol {
    counter-reset: section;
  }
  .resumeEditor ol li::before {
    counter-increment: section;
    content: counters(section, ".") " ";
    margin-right: .5em;
  }
  .resumeEditor blockquote {
    margin: 1em;
    padding: .5em;
    background: #ddd;
  }
`];
