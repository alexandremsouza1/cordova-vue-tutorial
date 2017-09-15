<template>
  <div>
    <h1>重定向和别名</h1>
    <p>重定向也是通过 routes 配置来完成，下面例子是从 /a 重定向到 /b：</p>
    <p>{ path: '/a', redirect: '/b' }</p>
    <hr color="green">
    <p>重定向的目标也可以是一个命名的路由：</p>
    <p>{ path: '/a', redirect: { name: 'foo' }}</p>
    <hr color="green">
    <p>甚至是一个方法，动态返回重定向目标：</p>
    <p>
      { path: '/a', redirect: to => {
      // 方法接收 目标路由 作为参数
      // return 重定向的 字符串路径/路径对象
      }}
    </p>
  </div>
</template>
<script>
  export default{
  }
</script>
<style></style>
