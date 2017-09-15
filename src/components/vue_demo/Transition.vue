<template>
  <div>
    <h1>过渡</h1>
    <p>概述</p>
    <p>Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。
      包括以下工具：
      在 CSS 过渡和动画中自动应用 class
      可以配合使用第三方 CSS 动画库，如 Animate.css
      在过渡钩子函数中使用 JavaScript 直接操作 DOM
      可以配合使用第三方 JavaScript 动画库，如 Velocity.js</p>
    <h2>单元素组件的过度</h2>
    <p>
      Vue 提供了 transition 的封装组件，在下列情形中，可以给任何元素和组件添加 entering/leaving 过渡
      条件渲染 （使用 v-if）
      条件展示 （使用 v-show）
      动态组件
      组件根节点</p>
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <hr color="green">
    <h2>CSS过渡</h2>
    <button @click="show1 = !show1">
      Toggle render
    </button>
    <transition name="slide-fade">
      <p v-if="show1">hello</p>
    </transition>
    <h1>剩余过渡效果请查看官方文档</h1>
  </div>
</template>
<script>
  export default{
    data () {
      return {show: true, show1: true}
    }
  }
</script>
<style>
  h1 {
    position: relative;
    margin-top: 20px;
    border: 1px solid red;
    text-align: center;
    font-weight: 900;
  }

  h2 {
    position: relative;
    margin-top: 20px;
    border: 1px solid red;
    text-align: center;
    font-weight: 900;
  }

  p {
    text-align: center;
    position: relative;
    border: 1px solid red;
    margin-top: 10px;
  }

  /*单元素组件的过度 start*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */
  {
    opacity: 0
  }

  /*单元素组件的过度 end*/

  /*CSS过渡 start*/

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }

  /*CSS过渡 end*/
</style>
