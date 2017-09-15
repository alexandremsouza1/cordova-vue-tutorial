<template>
  <div>
    <h1>组件内的钩子</h1>
    <p>
      beforeRouteEnter 钩子 不能 访问 this，
      因为钩子在导航确认前被调用,因此即将登场的新组件还没被创建。
      不过，你可以通过传一个回调给 next来访问组件实例。
      在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。
    </p>
    <p>
      你可以 在 beforeRouteLeave 中直接访问 this。
      这个 leave 钩子通常用来禁止用户在还未保存修改前突然离开。
      可以通过 next(false) 来取消导航。
    </p>
  </div>
</template>
<script>
  export default{
    beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当钩子执行前，组件实例还没被创建
      next(vm => {
        // 通过 `vm` 访问组件实例
        console.log(vm)
      })
    },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
    },
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      next()
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
</style>
