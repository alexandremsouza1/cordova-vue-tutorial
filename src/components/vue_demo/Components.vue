<template>
  <div>
    <ul>
      <li>
        <router-link to="/comRegister">组件注册</router-link>
      </li>
      <li>
        <router-link to="/dynamicMounted">动态挂接</router-link>
      </li>
      <li>
        <router-link to="/RefCom">引用组件</router-link>
      </li>
      <li>
        <router-link to="/PassProps">组件协作->使用属性</router-link>
      </li>
      <li>
        <router-link to="/AttributeValidate">组件协作->属性验证</router-link>
      </li>
      <li>
        <router-link to="/CustomEvent">自定义事件</router-link>
      </li>
      <li>
        <router-link to="/ContentDispatch">内容分发</router-link>
      </li>
      <li>
        <router-link to="/EventBus">事件总线</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
  }
</script>
<style>
  ul {
    position: absolute;
    width: 90%;
    height: 90%;
    border: 1px solid red;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
  }

  li {
    line-height: 2;
    vertical-align: middle;
    border: 1px solid green;
    text-align: center;
    color: black;
  }
</style>
