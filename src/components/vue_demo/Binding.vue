<template>
  <div>
      <ul>
        <li>
          <router-link to="/databinding">数据绑定</router-link>
        </li>
        <li>
          <router-link to="/eventBinding">事件绑定</router-link>
        </li>
        <li>
          <router-link to="/elementBinding">元素绑定</router-link>
        </li>
        <li>
          <router-link to="/bindingUIComponent">绑定控件</router-link>
        </li>
      </ul>
  </div>
</template>
<script>
  export default{
  }
</script>
<style>
  .vue_demo {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 1px solid red;
  }

  ul {
    position: absolute;
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
