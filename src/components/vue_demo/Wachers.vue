<template>
  <div>
    <h1>观察Watchers</h1>
    <p>
      Ask a yes/no question:
    </p>
    <input v-model="question">
    <p>{{ answer }}</p>
    <p>在这个示例中，使用 watch 选项
      允许我们执行异步操作 (访问一个 API)，
      限制我们执行该操作的频率，并在我们得到
      最终结果前，设置中间状态。
      这是计算属性无法做到的。</p>
  </div>
</template>
<script>
  import axios from 'axios'
  import _ from 'lodash'
  export default{
    data () {
      return {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
      }
    },
    watch: {
      // 如果 question 发生改变，这个函数就会运行
      question: function (newQuestion) {
        this.answer = 'Waiting for you to stop typing...'
        this.getAnswer()
      }
    },
    methods: {
      // _.debounce 是一个通过 lodash 限制操作频率的函数。
      // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
      // ajax 请求直到用户输入完毕才会发出
      // 学习更多关于 _.debounce function (and its cousin
      // _.throttle), 参考: https://lodash.com/docs#debounce
      getAnswer: _.debounce(
        function () {
          if (this.question.indexOf('?') === -1) {
            this.answer = 'Questions usually contain a question mark. ;-)'
            return
          }
          // 中间状态
          this.answer = 'Thinking...'
          var vm = this
          axios.get('https://yesno.wtf/api')
            .then(function (response) {
              vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function (error) {
              vm.answer = 'Error! Could not reach the API. ' + error
            })
        },
        // 这是我们为用户停止输入等待的毫秒数
        500
      )
    }
  }
</script>
<style>
  #app {
    text-align: center;
  }

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

  input{
    border-width: 2px;
    border-color: dodgerblue;
    border-style: solid;
    /*border: 2px solid dodgerblue;*/
    width: 100%;
    height: 100%;
  }
</style>
