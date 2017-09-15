<template>
  <div>
    <!--模板属性方式实现-->
    <!--在这个地方，模板不再简单和清晰。
    你必须看一段时间才能意识到，这里是想要显示变量 message 的翻转字符串。
    当你想要在模板中多次引用此处的翻转字符串时，就会更加难以处理。-->
    <!--{{ message.split('').reverse().join('') }}-->
    <h1>计算属性</h1>
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <button v-on:click="change">修改</button>
    <hr>
    <hr>
    <h1>计算属性的缓存VS method方法</h1>
    <p>调用计算属性缓存查看当前时间: "{{nowCompute}}"</p>
    <p>调用Method查看当前时间: "{{this.nowMethod()}}"</p>
    <!--多次访问计算属性会立即返回之前的计算结果，而不必再次执行函数；-->
    <!--每当触发重新渲染时，method 调用方式将总是再次执行函数-->
    <p id="marker">我们为什么需要缓存？假设我们有一个性能开销比较大的的计算属性 A，
      它需要遍历一个极大的数组和做大量的计算。
      然后我们可能有其他的计算属性依赖于 A 。
      如果没有缓存，我们将不可避免的多次执行 A 的 getter！
      如果你不希望有缓存，请用 method 替代。</p>
    <hr>
    <hr>
    <div id="demo">{{ fullName }}</div>
    <button @click="setNewName">setNewName</button>
    <h1>计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：</h1>
    <router-link to="/watchers">Next Watchers</router-link>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        message: 'Hello',
        dateCompute: '',
        dateMethod: '',
        firstName: 'Foo',
        lastName: 'Bar'
//        fullName: 'Foo Bar'
      }
    },
    computed: {
      // a computed getter
      reversedMessage: function () {
        // `this` points to the vm instance
        return this.message.split('').reverse().join('')
      },
      nowCompute: function () {
        return Date.now()
      },
      fullName: {
        // getter 用法
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        // setter
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    },
    methods: {
      change: function () {
        this.message = this.message + '1'
      },
      nowMethod: function () {
        return Date.now()
      },
      setNewName: function () {
        this.fullName = 'John Doe'
      }
    }
  }
</script>
<style>

  #app {
    text-align: center;
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
    border: 1px solid red;
    margin-top: 10px;
  }

  #marker {
    font-size: 10px;
    color: #4B946A;
  }
</style>
