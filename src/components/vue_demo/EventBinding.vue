<template>
  <div>
    <h1>事件绑定</h1>
    <hr color="green">
    <p>监听事件</p>
    <button v-on:click="counter += 1">增加 1</button>
    <p>这个按钮被点击了 {{ counter }} 次。</p>
    <hr color="green">
    <p>方法处理器</p>
    <!-- `greet` 是在下面定义的方法名 -->
    <button v-on:click="greet">Greet</button>
    <hr color="green">
    <p>方法处理器</p>
    <button v-on:click="say('hi')">Say hi</button>
    <hr color="green">
    <p>有时也需要在内联语句处理器中访问原生 DOM 事件。
      可以用特殊变量 $event 把它传入方法：</p>
    <button v-on:click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    <hr color="green">
    <p>事件修饰符</p>
    <p>
      看代码
      <!-- 阻止单击事件冒泡 -->
      <!--<a v-on:click.stop="doThis"></a>-->
      <!-- 提交事件不再重载页面 -->
      <!--<form v-on:submit.prevent="onSubmit"></form>-->
      <!-- 修饰符可以串联  -->
      <!--<a v-on:click.stop.prevent="doThat"></a>-->
      <!-- 只有修饰符 -->
      <!--<form v-on:submit.prevent></form>-->
      <!-- 添加事件侦听器时使用事件捕获模式 -->
      <!--<div v-on:click.capture="doThis">...</div>-->
      <!-- 只当事件在该元素本身（比如不是子元素）触发时触发回调 -->
      <!--<div v-on:click.self="doThat">...</div>-->
    </p>
    <p>键盘修饰符 参见官方文档</p>
    <p>修饰键 参见官方文档</p>
    <p>鼠标按钮修饰符 参见官方文档</p>

  </div>
</template>
<script>
  export default{
    data () {
      return {
        counter: 0,
        name: 'jone'
      }
    },
    methods: {
      greet: function (event) {
        // `this` 在方法里指当前 Vue 实例
        alert('Hello ' + this.name + '!')
        // `event` 是原生 DOM 事件
        if (event) {
          alert(event.target.tagName)
        }
      },
      say: function (message) {
        alert(message)
      },
      warn: function (message, event) {
        // 现在我们可以访问原生事件对象
        if (event) event.preventDefault()
        alert(message)
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
    text-align: center;
    position: relative;
    border: 1px solid red;
    margin-top: 10px;
  }

  button {
    border: solid red 1px;
    text-align: center;
  }
</style>
