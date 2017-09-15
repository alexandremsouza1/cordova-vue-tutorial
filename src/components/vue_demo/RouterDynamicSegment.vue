<template>
  <div>
    <h1>动态路由匹配</h1>
    <p>我们经常需要把某种模式匹配到的所有路由，
      全都映射到同个组件。
      例如，我们有一个 User 组件，
      对于所有 ID 各不相同的用户，都要使用这个组件来渲染。
      那么，我们可以在 vue-router 的路由路径中使用
      『动态路径参数』（dynamic segment）来达到这个效果：</p>
    <p>
      <router-link to="/user/foo">/user/foo</router-link>
      <br>
      <router-link to="/user/bar">/user/bar</router-link>
    </p>
    <p>
      你可以在一个路由中设置多段『路径参数』，对应的值都会设置到 $route.params 中。例如：
      模式	匹配路径	$route.params
      /user/:username	/user/evan	{ username: 'evan' }
      /user/:username/post/:post_id	/user/evan/post/123	{ username: 'evan', post_id: 123 }
      除了 $route.params 外，$route 对象还提供了其它有用的信息，例如，$route.query（如果 URL 中有查询参数）、$route.hash 等等。你可以查看 API 文档 的详细说明。
    </p>
  </div>
</template>
<script>
  export default{
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
