<template>
  <div>
    <h1>可复用性 & 组合</h1>
    <p>混合</p>
    <p>混合 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。
      混合对象可以包含任意组件选项。
      以组件使用混合对象时，所有混合对象的选项将被混入该组件本身的选项。</p>
    <hr color="green">
    <h1>选项合并</h1>
    <p>当组件和混合对象含有同名选项时，这些选项将以恰当的方式混合。
      比如，同名钩子函数将混合为一个数组，因此都将被调用。
      另外，混合对象的 钩子将在组件自身钩子 之前 调用 </p>
    <hr color="green">
    <p>值为对象的选项，例如 methods, components 和 directives，
      将被混合为同一个对象。
      两个对象键名冲突时，取组件对象的键值对。</p>
    <button v-on:click="print">打印</button>
    <p>注意： Vue.extend() 也使用同样的策略进行合并。</p>
  </div>
</template>
<script>
  import Vue from 'vue'
  // 混合--------------------------start--------------------------
  // 定义一个混合对象
  var myMixin = {
    created: function () {
      this.hello()
    },
    methods: {
      hello: function () {
        console.log('hello from mixin!')
      }
    }
  }
  // 定义一个使用混合对象的组件
  var Component = Vue.extend({
    mixins: [myMixin]
  })
  var component = new Component() // => "hello from mixin!
  // 混合--------------------------end--------------------------

  // 选项合并--------------------------start--------------------------
  var mixin = {
    created: function () {
      console.log('混合对象的钩子被调用')
    }
  }
  // 选项合并--------------------------end--------------------------

  // 选项合并--------------------------start--------------------------
  var mixin1 = {
    methods: {
      foo: function () {
        console.log('foo')
      },
      conflicting: function () {
        console.log('from mixin')
      }
    }
  }
  // 选项合并--------------------------end--------------------------

  export default{
    // 选项合并--------------------------start--------------------------
    mixins: [mixin, mixin1],
    created: function () {
      console.log('组件钩子被调用')
    },
    // 选项合并--------------------------end--------------------------
    // 混合--------------------------start--------------------------
    components: {
      // <my-component> 将只在父模板可用
      'my-component1': component
    },
    // 混合--------------------------end--------------------------
    // 选项合并--------------------------start--------------------------
    methods: {
      bar: function () {
        console.log('bar')
      },
      conflicting: function () {
        console.log('from self')
      },
      print: function () {
        this.foo() // => "foo"
        this.bar() // => "bar"
        this.conflicting() // => "from self
      }
    }
    // 选项合并--------------------------end--------------------------
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
