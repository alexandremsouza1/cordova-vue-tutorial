<template>
  <div>
    <p>多个组件可以使用同一个挂载点，然后动态地在它们之间切换。</p>
    <p>元素'<'component'>'可以用于此场景，修改属性is即可达成动态切换的效果：</p>
    <p>假设我们有三个组件home、posts、archives，我们可以设置一个定时器，
      每隔2秒修改一次current，把三个组件的逐个切入到当前挂接点：</p>
    <component v-bind:is="current"></component>
  </div>
</template>
<script>
  export default{
    data () {
      return {current: 'archive', i: 0, b: ['home', 'posts', 'archive']}
    },
    components: {
      home: {template: '<h1>home</h1>'},
      posts: {template: '<h1>posts</h1>'},
      archive: {template: '<h1>archive</h1>'}
    },
    methods: {
      a: function () {
        console.log(this.current)
        this.i = this.i % 3
        this.current = this.b[this.i]
        this.i++
        setTimeout(this.a, 2000)
      }
    },
    mounted () {
      setTimeout(this.a, 2000)
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
