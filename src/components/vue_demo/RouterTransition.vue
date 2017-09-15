<template>
  <div>
    <h1>路由过渡效果</h1>
    <router-link to="/RouterTransition/1">/</router-link>
    <transition name="slide-fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <p>基于路由的动态过渡 见官方文档</p>
  </div>
</template>
<script>
  export default{
  }
</script>
<style>
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
</style>
