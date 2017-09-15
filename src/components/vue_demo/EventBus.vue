<template>
  <div>
    <h1>事件总线</h1>
    <p>如果两个组件之间没有父子关系，但是也需要通讯，
      可以使用事件总线。具体做法就是创建一个空的Vue实例作为中介，
      事件发起方调用此实例的$emit方法来发射事件，
      而事件监听方使用此实例的$on方法来挂接事件。</p> 
    <foo></foo>
    <bar></bar>
    <p>这里列出的案例，是同属一个父组件的两个兄弟组件的通讯方法。
      实际上作为总线方式的Vue实例，可以用于任何组件之间的通讯。</p>
    <hr color="green">
    <h1>集中化的eventBus</h1>
    <p>实际上，我们只是为了让两个组件交换数据，
      这个过程并不应该和组件的结构（父子关系的组件，兄弟关系的组件）捆绑在一起。
      因此，一个变通的方式是引入一个新的组件，
      用它作为组件之间的通讯中介，此技术被称为Event Bus。</p>
    <div>
      <h1>todo app</h1>       
      <new-todo></new-todo>
      <todo-list></todo-list>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  var bus = new Vue({})
  Vue.component('foo', {
    template: '<button v-on:click="inc">{{ count }}</button>',
    data: function () {
      return {count: 0}
    },
    mounted () {
      bus.$on('foo-inc', this.doinc)
    },
    methods: {
      inc: function () {
        bus.$emit('bar-inc', this)
      },
      doinc: function () {
        this.count++
      }
    }
  })

  Vue.component('bar', {
    template: '<button v-on:click="inc">{{ count }}</button>',
    data: function () {
      return {count: 0}
    },
    mounted () {
      bus.$on('bar-inc', this.doinc)
    },
    methods: {
      inc: function () {
        bus.$emit('foo-inc', this)
      },
      doinc: function () {
        this.count++
      }
    }
  })

  var eventHub = new Vue({
    data () {
      return {todos: ['A', 'B', 'C']}
    },
    created: function () {
      this.$on('add', this.addTodo)
      this.$on('delete', this.deleteTodo)
    },
    beforeDestroy: function () {
      this.$off('add', this.addTodo)
      this.$off('delete', this.deleteTodo)
    },
    methods: {
      addTodo: function (newTodo) {
        this.todos.push(newTodo)
      },
      deleteTodo: function (i) {
        this.todos.splice(i, 1)
      }
    }
  })

  var newTodo = {
    template: '<div>' +
    '<input type="text" autofocus v-model="newtodo"/>' +
    '<button @click="add">add</button>' +
    '</div>',
    data () {
      return {newtodo: ''}
    },
    methods: {
      add: function () {
        eventHub.$emit('add', this.newtodo)
        this.newtodo = ''
      }
    }
  }

  var todoList = {
    template: '<ul>' +
    '<li v-for="(index,item) in items">{{item}}' +
    '<button @click="rm(index)">X</button></li>' +
    '</ul>',
    data () {
      return {items: eventHub.todos}
    },
    methods: {
      rm: function (i) {
        eventHub.$emit('delete', i)
      }
    }
  }
  export default{
    components: {newTodo: newTodo, todoList: todoList}
  }
</script>
<style>
  h1 {
    margin-top: 20px;
    border: 1px solid red;
    text-align: center;
    font-weight: 900;
  }
</style>
