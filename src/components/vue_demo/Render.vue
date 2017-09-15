<template>
  <div>
    <h1>Render函数</h1>
    <p>
      Render函数可以充分利用JavaScript语言在创建HTML模板方面的灵活性。
      实际上，组件的Template最终都会转换为Render函数。
    </p>
    <counter></counter>
    <p>函数render的参数h，
      其实是一个名为createElement 的函数，
      可以用来创建元素。</p>
    <hr color="green">
    <div id="example">   
      <hdr :level="1">abc1</hdr>
      <hdr :level="2">abc2</hdr>
    </div>
    <p>
      函数render会传入一个createElement函数作为参数，
      你可以使用此函数来创建标签。在render函数内，可
      以通过this.$slots访问slot，
      从而把slot内的元素插入到当前被创建的标签内。
    </p>
  </div>
</template>
<script>
  import Vue from 'vue'
  var a = {
    data () { return {count: 1} },
    methods: {
      inc () {
        this.count++
      }
    },
    render: function (h) {
      // var self = this
      var buttonAttrs = {
        on: {click: this.inc},
        domProps: {innerHTML: '+'}
      }
      var spanAttrs = {
        on: {click: this.inc},
        domProps: {
          innerHTML: this.count.toString()
        }
      }
      var span = h('span', spanAttrs, [])
      var button = h('button', buttonAttrs, [])
      return h('div', {}, [span, button])
    }
  }

  Vue.component('hdr', {
    render: function (createElement) {
      console.log(this.level)
      return createElement('h' + this.level, this.$slots.default)
    },
    props: {level: {type: Number, required: true}}
  })
  export default{
    components: {counter: a}
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

  h2 {
    position: relative;
    margin-top: 20px;
    border: 1px solid green;
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
