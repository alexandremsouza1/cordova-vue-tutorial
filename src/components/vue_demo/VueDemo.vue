<template>
  <div class="vue_demo">
    <ul>
      <li>
        <router-link to="/example">Vue实例</router-link>
      </li>
      <li>
        <router-link to="/binding">绑定</router-link>
      </li>
      <li>
        <router-link to="/directive">指令</router-link>
      </li>
      <li>
        <router-link to="/components">组件</router-link>
      </li>
      <li>
        <router-link to="/Combination">可复用性&组合</router-link>
      </li>
      <li>
        <router-link to="/Render">Render函数</router-link>
      </li>
      <li>
        <router-link to="/Filters">过滤器</router-link>
      </li>
      <li>
        <router-link to="/Transition">过渡</router-link>
      </li>
      <li>
        <router-link to="/RouterPlugin">路由</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data () {
      return {}
    }
  }
</script>
<style>
  @import "../../assets/css/vue_demo.css";
</style>
