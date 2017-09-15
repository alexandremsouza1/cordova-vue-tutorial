<template>
  <div>
    <h1>
      组件注册
    </h1>
    <p>注册和引用</p>
    <p>使用组件之前，首先需要注册。可以注册为全局的或者是局部的。</p>
    <p>要注册一个全局组件，你可以使用 Vue.component(tagName, options)。例如：</p>
    <router-link to="/gloableComponents">到其他页面看Tag组件是否可用</router-link>
    <my-component></my-component>
    <my-component1></my-component1>
  </div>
</template>
<script>
  import Vue from 'vue'
  // 全局注册
  Vue.component('my-component', {
    template: '<div>A custom component!</div>'
  })

  var Child = {
    template: '<div>A custom component! 1</div>'
  }

  export default{
    // ...
    components: {
      // <my-component> 将只在父模板可用
      'my-component1': Child
    }
  }
</script>
<style>
  #app {
    text-align: center;
  }

  h1 {
    position: relative;
    margin-top: 20px;
    border: 1px solid red;
    text-align: center;
    font-weight: 900;
  }

  p {
    position: relative;
    border: 1px solid red;
    margin-top: 10px;
  }
</style>


