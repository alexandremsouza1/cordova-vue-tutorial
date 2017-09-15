<template>
  <div>   
    <h1>Watch</h1>
    <div>
      <button @click="change">change</button>
      <span>{{ thing }}</span>
    </div>
    <router-link to="/compute">Next 计算属性</router-link>
  </div>
</template>
<script>
  export default
  {
    data () {
      return {thing: 1}
    },
    watch: {
      // 也可将匿名函数写到methods下
      thing: function (val, oldVal) {
        // 在值变化之前可监听到
        alert('a thing changed new:' + val + ',old:' + oldVal)
      }
    },
    methods: {
      change: function () {
        this.thing++
      }
    }
  }

</script>

<style>

  #demo {
    text-align: center;
  }

  h1 {
    position: relative;
    margin-top: 20px;
    border: 1px solid red;
    text-align: center;
    font-weight: 900;
  }

  button {
    border: solid red 1px;
    text-align: center;
  }

  span button {
    position: relative;
    border: 1px solid red;

  }
</style>
