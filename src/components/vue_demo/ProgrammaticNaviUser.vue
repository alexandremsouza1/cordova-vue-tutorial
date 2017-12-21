<template>
  <div>
    <h1>User {{ $route.params.userId }}</h1>
    <p>看控制台</p>
  </div>
</template>
<script>
  export default{
    created: function () {
      console.log(this.$route)
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
