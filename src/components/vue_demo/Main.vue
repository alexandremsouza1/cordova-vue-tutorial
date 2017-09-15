<template>
  <div>
    <comp-header></comp-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/cordova_demo">Cordova</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/vue_demo">Vue</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import CompHeader from './Header.vue'
  export default{
    components: {
      CompHeader: CompHeader
    }
  }
</script>
<style>
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }

  .tab-item {
    flex: 1;
    text-align: center;
    display: block;
    font-size: 14px;
    color: rgb(77, 85, 93);
  . active color: rgb(240, 20, 20)
  }
</style>
