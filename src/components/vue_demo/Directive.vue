<template>
  <div>
    <h1>指令</h1>
    <p>指令是带有v-前缀的特殊HTML标签属性。
      指令的职责，就是当其属性值改变时，将某些行为应用到DOM上</p>
    <span v-text="value"></span>
    <p>指令是扩展和复用代码的一种方式，比如指令v-text可以用属性值设置元素的内容：</p>
    <p>当value修改时，v-text会修改当前所在元素的内容</p>
    <hr color="green">
    <a v-bind:href="value1">url</a>
    <p>指令v-bind会在绑定的属性值修改时，同步修改由参数（href）指定的属性。</p>
    <hr color="green">
    <p>指令是有格式的：</p>
    <p> 指令能接受一个参数，在指令后以“:”指明。</p>
    <p> 指令能接受一个或者多个修饰符，是以“.”指明的特殊后缀。</p>
    <p> 指令能接受一个单一JavaScript表达式，最常见的表达式就是一个属性值。</p>
    <div id="example" @click="t1">   
       <a href="http://t.cn" v-on:click.prevent.stop="t2">t.cn</a>
    </div>
    <hr color="green"/>
    <p>简写</p>
    <p>v-bind：
      '<'a v-bind:href="url"'><'/a'>'
      v-bind简写：
      '<'a :href="url"'>'<'/a'>'
    </p>
    <p>
      v-on：
      '<'a v-on:click="doSomething"'><'/a'>'
      v-on缩写使用@符号：
      '<'a @click="doSomething"'><'/a'>'
    </p>
    <router-link to="/CustomDirective">自定义指令</router-link>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        value: 42,
        value1: 'http://t.cn/#42'
      }
    },
    methods: {
      t1 () {
        console.log('t1')
      },
      t2 () {
        console.log('t2')
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
</style>
