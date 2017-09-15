<template>
  <div>
    <h1>自定义事件</h1>
    {{ total }}   
    <count ref="b1"></count>
    <count ref="b2"></count>
    <p>接收事件:$on(event)</p>
    <p>发射事件:$emit(event)</p>
    <hr color="green">
    <p>除了在js代码内通过$on方法设置监听代码外，
      也可以使用指令v-on在HTML内达成类似效果：</p>
    '<'count v-on:inc='inc'>'<'/count'>'
    '<'count v-on:inc='inc'>'<'/count'>'
  </div>
</template>
<script>
  import Vue from 'vue'
  Vue.component('count', {
    template: '<button v-on:click="inc">{{ count }}</button>',
    data: function () {
      return {count: 0}
    },
    methods: {
      inc: function () {
        this.count += 1
        this.$emit('inc1')
      }
    }
  })

  export default{
    data () {
      return {total: 0}
    },
    mounted () {
      this.$refs.b1.$on('inc1', this.inc)
      this.$refs.b2.$on('inc1', this.inc)
    },
    methods: {
      inc: function () {
        this.total += 1
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
    position: relative;
    border: 1px solid red;
    margin-top: 10px;
  }
</style>
