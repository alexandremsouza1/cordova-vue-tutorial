<template>
  <div>
    <h1>编程式导航</h1>
    <p>
      除了使用 '<'p'>' 创建 a 标签来定义导航链接，
      我们还可以借助 router 的实例方法，通过编写代码来实现。</p>
    <h2>router.push(location)</h2>
    <p>
      想要导航到不同的 URL，
      则使用 router.push 方法。这个方法会向 history 栈添加一个新的记录，
      所以，当用户点击浏览器后退按钮时，则回到之前的 URL。</p>
    <p>
      当你点击 '<'router-link'>' 时，
      这个方法会在内部调用，所以说，点击'<'router-link :to='...'>'
      等同于调用 router.push'(...)'。
    </p>
    <p>'<'router-link :to="..."'>'	router.push(...)</p>
    <p>该方法的参数可以是一个字符串路径，或者一个描述地址的对象。</p>
    <button v-on:click="pushString">字符串</button>
    <button v-on:click="pushObject">对象</button>
    <button v-on:click="pushNamingRouter">命名的路由</button>
    <button v-on:click="pushQueryParams">带查询参数</button>
    <hr color="green">
    <h2>router.replace(location)</h2>
    <p>跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，
      而是跟它的方法名一样 —— 替换掉当前的 history 记录。</p>
    <p>'<'router-link :to="..." replace'>'	router.replace(...)</p>
    <hr color="green">
    <h2>router.go(n)</h2>
    <p>这个方法的参数是一个整数，
      意思是在 history 记录中向前或者后退多少步，
      类似 window.history.go(n)。</p>
    <p>//在浏览器记录中前进一步，等同于 history.forward() </p>
    <p>router.go(1)</p>
    <br>
    <p>// 后退一步记录，等同于 history.back()</p>
    <p>router.go(-1)</p>
    <br>
    <p>// 前进 3 步记录</p>
    <p>router.go(3)</p>
    <br>
    <p>// 如果 history 记录不够用，那就默默地失败呗</p>
    <p>router.go(-100)</p>
    <p>router.go(100)</p>
    <hr color="green">
    <h2>操作 History</h2>
    <p>你也许注意到 router.push、 router.replace 和 router.go
      跟 window.history.pushState、 window.history.replaceState 和 window.history.go好像，
      实际上它们确实是效仿 window.history API 的。</p>
    <p>因此，如果你已经熟悉 Browser History APIs，那么在 vue-router 中操作 history 就是超级简单的。</p>
    <p>还有值得提及的，vue-router 的导航方法 （push、 replace、 go） 在各类路由模式（history、 hash 和 abstract）下表现一致。</p>
  </div>
</template>
<script>
  export default{
    data () {
      return {}
    },
    methods: {
      pushString: function () {
        // 字符串 path
        this.$router.push('ProgrammaticNaviUser')
      },
      pushObject: function () {
        // 对象
        this.$router.push({path: 'ProgrammaticNaviUser'})
      },
      pushNamingRouter: function () {
        // 命名的路由
        this.$router.push({name: 'ProgrammaticNaviUser', params: {userId: 123}})
      },
      pushQueryParams: function () {
        // 带查询参数，变成 /register?plan=private
        this.$router.push({path: 'ProgrammaticNaviUser', query: {plan: 'private'}})
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

  h2 {
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
