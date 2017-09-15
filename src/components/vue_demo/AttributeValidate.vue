<template>
  <div>
    <h1>属性验证</h1>
    <my-child-2 v-bind:age="age"></my-child-2>
    <my-child-1 v-bind:age2="age2"></my-child-1>
  </div>
</template>
<script>
  import Vue from 'vue'
  Vue.component('my-child-2',
    {
      props: {'age': Number},
      template: '<span>you are {{ age }}</span>'
    }
  )

  Vue.component('my-child-1', {
    props: {
      'age2': {
        type: Number,
        validator: function (value) {
          return value > 0 && value < 150
        },
        required: true,
        default: 50
      }
    },
    template: '<span>you are {{ age2 }}</span>'
  })

  export default{
    data () {
      // data: {age: '30'}
      return {age: 40, age2: 149}
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
