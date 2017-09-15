<template>
  <div>
    <h1>导航钩子</h1>
    <p>路由钩子主要用来拦截导航（URL切换），在此处有一个完成跳转或取消的机会。</p>
    <ul>
      <li>
        全局路由钩子(见main.js)
      </li>
      <li>
        <router-link to="/ExclusiveRouterHook">独享路由钩子</router-link>
      </li>
      <li>
        <router-link to="/ComponentRouterHook">组件路由钩子</router-link>
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

  ul {
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

  ul {
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

  p {
    position: relative;
    border: 1px solid red;
    margin-top: 10px;
  }
</style>
