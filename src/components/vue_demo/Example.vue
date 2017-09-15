<template>
  <div>     
    <h1>一个简单的Vue实例</h1>   
    <input type="text" placeholder='new todo' v-model="todo"/>
    <button @click="add">add</button>
    <ul>       
      <li v-for="(item, index) in items">{{item}}
        <button @click="rm(index)">X</button>
      </li>
    </ul>
    <router-link to="/lifecycle">Next 实例生命周期</router-link>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        items: ['item 1', 'item 2', 'item 3'],
        todo: ''
      }
    },
    methods: {
      inc () {
        this.count++
      },
      rm: function (i) {
        this.items.splice(i, 1)
      },
      add: function () {
        if (this.todo) {
          this.items.push(this.todo)
          this.todo = ''
        }
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

  input {
    position: relative;
    width: 200px;
    border: 1px solid red;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: 22px;
  }

  ul {
    position: relative;
    width: 90%;
    height: 90%;
    border: 1px solid red;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
  }

  button {
    border: solid red 1px;
    text-align: center;
  }

  a{
    border: solid red 1px;
    display: block;
    text-align: center;
  }

</style>
