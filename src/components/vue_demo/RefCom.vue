<template>
  <div>
    <h1>引用组件</h1>
    <p>第三个按钮的事件代码中，就需要引用前两个按钮的实例</p>
    {{ total }}   
    <count ref="b1"></count>
    <count ref="b2"></count>
    <button v-on:click="value">value</button>
    <p>标签button使用ref设置两个按钮分为为b1、b2，随后在父组件代码内通过$refs引用它们。</p>
    <p>$refs 只在组件渲染完成后才填充，并且它是非响应式的。它仅仅作为一个直接访问子组件的应急方案——应当避免在模板或计算属性中使用 $refs。</p>
  </div>
</template>
<script>
  import Vue from 'vue'
  Vue.component('count', {
    template: '<button v-on:click="inc">{{ count }}</button>',
    data: function () {
      return {count: 0}
    },
    methods: {
      inc: function () {
        this.count += 1
      }
    }
  })
  export default{
    data () {
      return {total: 0}
    },
    methods: {
      value: function () {
        this.total = this.$refs.b1.count + this.$refs.b2.count
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
    position: relative;
    border: 1px solid red;
    margin-top: 10px;
  }

  button {
    border: solid red 1px;
    text-align: center;
  }
</style>
