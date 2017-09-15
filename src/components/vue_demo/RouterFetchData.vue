<template>
  <div>
    <h1>导航完成后获取数据</h1>
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <hr color="green"/>
    <h1>导航完成前获取数据</h1>
    <router-link to="/RouterFetchBefore">RouterFetchBefore</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data () {
      return {
        loading: false,
        post: null,
        error: null
      }
    },
    created () {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.fetchData()
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        this.error = this.post = null
        this.loading = true
        var ref = this
        // replace getPost with your data fetching util / API wrapper
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            ref.loading = false
          })
          .catch(function () {
          })
//        getPost(this.$route.params.id, (err, post) => {
//          this.loading = false
//          if (err) {
//            this.error = err.toString()
//          } else {
//            this.post = post
//          }
//        })
        console.log(this.$route.params.id)
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
