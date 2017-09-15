<template>
  <div>
    <h1>基础</h1>
    <ul class="u">
      <li>
        <router-link to="/RouterGetStart">开始</router-link>
      </li>
      <li>
        <router-link to="/RouterDynamicSegment">动态路由匹配</router-link>
      </li>
      <li>
        <router-link to="/NestedRouter">嵌套路由</router-link>
      </li>
      <li>
        <router-link to="/ProgrammaticNavi">编程式导航</router-link>
      </li>
      <li>
        <router-link to="/NamingRouter">命名路由</router-link>
      </li>
      <li>
        <router-link to="/NamingView">命名视图</router-link>
      </li>
      <li>
        <router-link to="/RedirectAndAlias">重定向和别名</router-link>
      </li>
      <li>
        <router-link to="/">Html5 History模式</router-link>
      </li>
    </ul>
    <h1>进阶</h1>
    <ul class="u">
      <li>
        <router-link to="/RouterHook">导航钩子</router-link>
      </li>
      <li>
        <router-link to="/RouterMeta">路由元信息</router-link>
      </li>
      <li>
        <router-link to="/RouterTransition">过渡动效</router-link>
      </li>
      <li>
        <router-link to="/RouterFetchData/data">数据获取</router-link>
      </li>
      <li>
        <router-link to="/">滚动行为</router-link>
      </li>
      <li>
        <router-link to="/">懒加载</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
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

  .u {
    position: relative;
    width: 90%;
    height: 90%;
    border: 1px solid red;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
  }

  li {
    line-height: 2;
    vertical-align: middle;
    border: 1px solid green;
    text-align: center;
    color: black;
  }
</style>
