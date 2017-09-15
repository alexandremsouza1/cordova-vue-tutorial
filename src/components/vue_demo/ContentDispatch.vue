<template>
  <div>
    <h1>单个插槽</h1>
    <div>
      <h1>我是父组件的标题</h1>
      <my-component>
        <p>这是一些初始内容</p>
        <p>这是更多的初始内容</p>
      </my-component>
    </div>
    <hr color="green">
    <h1>具名插槽</h1>
    <app-layout>
      <h1 slot="header">这里可能是一个页面标题</h1>
      <p>主要内容的一个段落。</p>
      <p>另一个主要段落。</p>
      <p slot="footer">这里有一些联系信息</p>
    </app-layout>
    <hr color="green">
    <h1>作用域插槽</h1>
    <p>在父级中，具有特殊属性 scope 的 '<'template'>' 元素必须存在，表示它是作用域插槽的模板。
      scope 的值对应一个临时变量名，此变量接收从子组件中传递的 props 对象：</p>
    <div class="parent">
      <child>
        <template scope="props">
          <span>hello from parent</span>
          <span>{{ props.text }}</span>
        </template>
      </child>
    </div>
    <hr color="green">
    <h1>基础例子</h1>    
    <wrapper>       
      <navi></navi>
      <content1>           
        <topics></topics>
        <userinfo></userinfo>
      </content1>
    </wrapper>
    <p>注意：使用标签content1，而不是content，
      是因为后者是html内置的标签，我们的自定义标签不应该和内置标签冲突。</p>
  </div>
</template>
<script>
  import Vue from 'vue'
  Vue.component('my-component', {
    template: '<div>' +
    '<h2>我是子组件的标题</h2>' +
    ' <slot>只有在没有要分发的内容时才会显示。</slot>' +
    '</div>'
  })

  Vue.component('app-layout', {
    template: '<div class="container">' +
    '<header>' +
    '<slot name="header"></slot>' +
    '</header>' +
    '<main>' +
    '<slot></slot>' +
    '</main>' +
    '<footer>' +
    '<slot name="footer"></slot>' +
    '</footer>' +
    '</div>'
  })

  Vue.component('child', {
    template: '<div class="child">' +
    '<slot text="hello from child"></slot>' +
    '</div>'
  })

  Vue.component('topics', {template: `<div class="topics">topics ...</div>`})
  Vue.component('userinfo', {template: `<div class="userinfo">userinfo ...</div>`})
  Vue.component('content1', {template: `<div class="content"><slot></slot></div>`})
  Vue.component('navi', {template: `<div class="navigator">navigator ...</div>`})
  var wrapper = Vue.component('wrapper', {template: `<div class="wrapper"><slot></slot></div>`})
  export default{
    components: {wrapper}
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
</style>
