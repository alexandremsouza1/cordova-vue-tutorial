<template>
  <div>
    <h1>生命周期</h1>
    <p>值{{counter}}</p>
    <p>看log</p>
    <button v-on:click="counter += 1">更新</button>
    <router-link to="/watch">Next Wathc</router-link>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        counter: 1
      }
    },
    beforeCreate: function () {
      // 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
      console.log('beforeCreate a is: ' + this.counter)
    },
    created: function () {
      // 实例已经创建完成之后被调用。
      // 在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。
      // 然而，挂载阶段还没开始，$el 属性目前不可见。
      console.log('created a is: ' + this.counter)
    },
    beforeMount: function () {
      console.log('beforeMount a is: ' + this.counter)
    },
    mounted: function () {
      console.log('mounted a is: ' + this.counter)
    },
    beforeUpdate: function () {
      // 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
      // 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
      console.log('beforeUpdate a is: ' + this.counter)
    },
    updated: function () {
      // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
      // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
      // 然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。
      console.log('updated a is: ' + this.counter)
    },
    beforeDestory: function () {
      console.log('beforeDestory a is: ' + this.counter)
    },
    destoryed: function () {
      console.log('destoryed a is: ' + this.counter)
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
    display: inline;
    position: relative;
    width: 30%;
    height: 30%;
    border: 1px solid red;
    margin-top: 10px;
  }

  button {
    margin-left: 10px;
    border: solid red 1px;
    text-align: center;
    margin-top: 10px;
  }

  a{
    border: solid red 1px;
    display: block;
    text-align: center;
  }
</style>
