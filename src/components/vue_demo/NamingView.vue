<template>
  <div>
    <h1>命名视图</h1>
    <ul>
      <li>
        <router-link to="/1">/1</router-link>
      </li>
      <li>
        <router-link to="/2">/2</router-link>
      </li>
    </ul>
    <router-view></router-view>
    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
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

  p {
    text-align: center;
    position: relative;
    border: 1px solid red;
    margin-top: 10px;
  }
</style>
