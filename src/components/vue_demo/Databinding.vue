<template>
  <div>
    <h1>数据绑定</h1>
    <p>插入值绑定</p>
    <p>绑定到插入值使用Mustache语法设置绑定。
      Mustache代表的就是双大括号({{}})：
      插入值绑定将会把数据对象上的属性值插入到Mustache指示的位置，
      且绑定的数据对象的变化会导致插值的变化。
      如果不希望后续的变化修改插值，可以使用v-once指令。
      就是修改一行代码</p>
    <div v-once>{{value + 1}}</div>
    <hr color="green">
    <div>{{finalvalue}}</div>
    <p>
      在Mustache内还可以使用JavaScript表达式，
      比如： {{ value + 1 }} 但是每个绑定都只能包含单个表达式。
      语句或者多个表达式是不可以的。
    </p>
    <hr color="green">
    <p>
      如果你的数据成员内容是HTML片段，
      并且希望插入这个片段到DOM内，
      那么使用指令v-html:
    </p>
    <div v-html="raw"></div>
    <p>使用v-html动态渲染用户提供的内容插值需要小心，
      至少不要把用户输入内容作为值来插入，
      否则很容易导致XSS攻击。</p>
    <hr color="green">
    <p>插入值绑定是无法处理HTML元素属性的，就是说，以下代码：
    <pre><</pre>input value=<pre>{</pre><pre>{</pre>value<pre>}</pre><pre>}</pre><pre>></pre> 是无法达到你的预期目的的。
      想要绑定到属性，就得使用指令<strong>v-bind</strong>>:
    <input v-bind:value="value">   
    <hr color="green">
    <p><strong>针对标签属性class：</strong></p>
    <p>v-bind可以直接传入一个对象作为属性值</p>
    <div v-bind:class="{ active: isActive, 'hasError': hasError}">Class文本</div>
    <p>得到的渲染结果为： <pre><</pre>div class="active"><pre><</pre><pre>/</pre>div<pre>></pre>

    <p>也可以传入一个数组作为class属性的值</p>
    <div v-bind:class="[active,hasError]"></div>
    <p>得到的渲染结果为： '<'div class="active hasError"><'/div>'</p>

    <hr color="green">
    <p><strong>针对style的情况：</strong></p>
    <div v-bind:style="styleObject">Style文本</div>
  </div>
</template>
<script>
  export default{
    computed: {
      finalvalue: function () {
        return this.value + 1
      }
    },
    data () {
      return {
        value: 41,
        raw: '<h2>50</h2>',
        isActive: true,
        hasError: false,
        styleObject: {
          color: 'red', fontSize: '23px'
        }
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
    text-align: center;
    position: relative;
    border: 1px solid red;
    margin-top: 10px;
  }

  .active {
    color: #189EF0;
    font-size: 14px;
  }

  .hasError {
    color: red;
    font-size: 14px;
  }

  pre{
    display: inline;
  }
</style>
