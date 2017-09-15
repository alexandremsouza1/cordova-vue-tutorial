<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <div>
    <h1>元素绑定 </h1>
    <p>不但可以做属性绑定，元素也可以绑定的。
      比如根据表达式条件的不同来绑定不同的元素，或者循环绑定元素。</p>
    <h1 v-if="false">h1</h1>
    <h2 v-else>h2显示，h1被隐藏</h2>
    <p>当然，如果不必要，v-else是可以不写的：</p>
    <hr color="green">
    <p>如果需要条件化绑定的是一组元素，可以使用《template》来打包分组：</p>
    <template v-if="true">
           <h1>h1</h1>
           <p>big title</p>
    </template>
      
    <template v-else>
           <h1>h2</h1>
           <p>second title</p>
    </template>
    <hr color="green">
    <p>有一个叫做v-show的指令，可以根据表达式的真假值来决定是否显示元素。
      但是，即使表达式是假值，元素依然会绑定到DOM中，只是并不显示：</p>
    <h1 v-show="false">h1</h1>
    <p>因此，它并不是一个元素绑定指令。</p>
    <hr color="green">
    <p>指令v-for基于一个数组渲染一组元素。
      这个指令的表达式使用特殊的语法，
      形式为： item in items或者item of items，
      或者 (item, index) in items，如果你需要循环索引的话。</p>
    <ul>     
      <li v-for="(item, index) in items">{{ item }}，{{ index }}</li>
    </ul>
    <hr color="green">
    <p>指令v-for也可以对对象进行迭代，每个迭代出来的项目就是一个属性/值对：</p>
    <ul>   
      <li v-for="(v,k) in person">{{ k }}:{{ v }}</li>
    </ul>

    <hr color="green">
    <p>指令v-for也可以对整数迭代，等于循环整数次：</p>
    <ul>
      <li v-for="v in 3">{{ v }}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        items: [1, 2, 3],
        person: [{name: 'frodo', group: 'ring fellow'},
          {name: 'jack', group: 'rose'}]
      }
    }
  }
</script>
<style>
  h1, h2 {
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

  ul {
    position: relative;
    width: 90%;
    border: 1px solid red;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
  }

  li {
    line-height: 1;
    vertical-align: middle;
    border: 1px solid gray;
    text-align: center;
    color: black;
  }
</style>
