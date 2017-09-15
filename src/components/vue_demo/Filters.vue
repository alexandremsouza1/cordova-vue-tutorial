<template>
  <div>
    <h1>过滤器</h1>
    <p>
      Vue.js 允许你自定义过滤器，可被用作一些常见的文本格式化。
      过滤器可以用在两个地方：mustache 插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。
      过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符指示：</p>
    <!-- in mustaches -->
    {{ message | capitalize }}
    <!-- in v-bind -->
    <div v-bind:id="rawId | formatId"></div>
    <hr color="green">
    <h1>过滤器可以串联：</h1>
    {{ message | filterA | filterB }}
    <p>在这个例子中，filterA 被定义为接收单个参数的过滤器函数，
      表达式 message 的值将作为参数传入到函数中，
      然后继续调用同样被定义为接收单个参数的过滤器函数 filterB，
      将 filterA 的结果传递到 filterB 中。</p>
  </div>
</template>
<script>
  export default{
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      },
      formatId: function (value) {
        if (!value) return ''
        value = value.toString()
        return 'ID' + value
      },
      filterA: function (value) {
        if (!value) return ''
        return 'add A ' + value
      },
      filterB: function (value) {
        if (!value) return ''
        return 'add B ' + value
      }
    },
    data () {
      return {
        message: 'abC',
        rawId: '123'
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

  p {
    text-align: center;
    position: relative;
    border: 1px solid red;
    margin-top: 10px;
  }
</style>
