<template>
  <div>
    <p v-on:click="onUserClick">
      User {{ $route.params.id }}
    </p>
    <p>
    <h1>响应路由参数的变化</h1>
    <p>
      提醒一下，当使用路由参数时，
      例如从 /user/foo 导航到 user/bar，原来的组件实例会被复用。
      因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。
      不过，这也意味着组件的生命周期钩子不会再被调用。
      复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象：</p></p>

    <h1>高级匹配模式</h1>
    <p>
      vue-router 使用 path-to-regexp 作为路径匹配引擎，所以支持很多高级的匹配模式，例如：可选的动态路径参数、匹配零个或多个、一个或多个，甚至是自定义正则匹配。查看它的 文档 学习高阶的路径匹配，还有 这个例子 展示 vue-router 怎么使用这类匹配。</p>
    <h1>匹配优先级</h1>
    <p>有时候，同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。</p>
  </div>
</template>
<script>
  export default{
    created: function () {
      console.log('User ' + this.$route.params.id + ' is created')
    },
    methods: {
      onUserClick: function () {
        if (this.$route.params.id === 'foo') {
          this.$router.push('/user/bar')
        } else if (this.$route.params.id === 'bar') {
          this.$router.push('/user/foo')
        }
      }
    },
    watch: {
      '$route' (to, from) {
        console.log('name:' + to.name + ' path:' + to.path + ' params:' + to.params)
        console.log('name:' + from.name + ' path:' + from.path + ' params:' + from.params)
        // 对路由变化作出响应...
      }
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

  p {
    text-align: center;
    position: relative;
    border: 1px solid red;
    margin-top: 10px;
  }
</style>
