<template>
  <div>
    <h1>嵌套路由</h1>
    <p>在动态路由匹配的例子中'<'router-view'>' 是最顶层的出口，
      渲染最高级路由匹配到的组件。
      同样地，一个被渲染组件同样可以包含自己的嵌套 '<'router-view'>'。
      例如，在 User 组件的模板添加一个 '<'router-view'>'：
    </p>
    <p>
      <router-link to="/nestedUser/profileID/profile">/nestedUser/profile</router-link>
      <br>
      <router-link to="/nestedUser/postsID/posts">/nestedUser/posts</router-link>
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
    display: block;
    border: 1px solid red;
    margin-top: 10px;
  }
</style>
