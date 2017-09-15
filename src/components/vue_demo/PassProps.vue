<template>
  <div>
    <h1>使用Prop传递数据</h1>
    <p>此方法用于父组件传递数据给子组件。
      每个组件的作用域都是和其他组件隔离的，
      因此，子组件不应该直接访问父组件的数据，
      而是通过属性传递数据过来。
      如下案例传递一个字符串到子组件：</p>
    <my-child message="hello"></my-child>
    <p>在页面上。这里，父组件为挂接在#app上的Vue实例，
      子组件为child。child使用props声明一个名为message的属性，
      此属性把父组件内的字符串hello传递数据到组件内。</p>
    <hr color="green">
    <p>如果不是传递一个静态的字符串，而是传递JavaScript表达式，
      那么可以使用指令v-bind:</p>
    <my-child v-bind:message="hello+',world'"></my-child>
    <p>本案例把父组件内的hello成员传递给子组件。
      出现在属性内的hello不再指示字面上的字符串，
      而是指向一个表达式，因此传递进来的是表达式的求值结果。</p>
  </div>
</template>
<script>
  import Vue from 'vue'
  Vue.component('myChild', {
    props: ['message'],
    template: '<span style="display: block">{{ message }}</span>'
  })
  export default{
    data () {
      return {hello: 'hi'}
    }
  }
</script>
<style>
  #app {
    text-align: center
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
    width: 30%;
    height: 30%;
    border: 1px solid red;
    margin-top: 10px;
  }
</style>
