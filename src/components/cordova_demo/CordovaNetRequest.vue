<template>
  <div>
    <input type="button" value="发送get请求" v-on:click="onGetClick">
    <input type="button" value="发送post请求" v-on:click="onPostClick">
    <input type="button" value="执行多并发请求" v-on:click="onMultClick">
  </div>
</template>
<script>
  import axios from 'axios'
  var qs = require('qs')

  var clientID = ''
  var instance = axios.create({
    baseURL: 'https://[your_domain]',
    timeout: 2000,
    withCredentials: true

  })
  export default{
    methods: {
      onGetClick: function () {
        var self = this
        instance.get('/login')
          .then(function (response) {
            alert('get:login success')

            // application/x-www-form-urlencoded 表单请求
            var params = encodeURIComponent('key_A') + '=' + encodeURIComponent('val_A')
            instance.get('/user/info?' + params).then(function (response) {
              alert('get:info success')
            }).catch(function (error) {
              this.handlingErrors(error)
            })
          })
          .catch(function (error) {
            self.handlingErrors(error)
          })
      },
      onPostClick: function () {
        // URLSearchParams 只可在浏览器中使用

        // var params = new URLSearchParams()
        // params.append('username', 'jack')
        // params.append('password', '000000')
        var self = this
        var params = qs.stringify({'username': 'jack', 'password': '000000'})
        instance.post('/user/12345', params, {
          baseURL: 'https://your_domain_1',
          headers: {'Authorization': 'Basic ' + clientID}
        }).then(function (response) {
          let accesstoken = response.data.access_token
          instance.defaults.headers.common['Authorization'] = 'token ' + accesstoken
          console.log(response)
          alert('post success')
        }).catch(function (error) {
          self.handlingErrors(error)
        })
      },
      onMultClick: function () {
        var self = this

        function getUserAccount () {
          return axios.get('/user/12345').catch(function (error) {
            self.handlingErrors(error)
          })
        }

        function getUserPermissions () {
          return axios.get('/user/12345/permissions').catch(function (error) {
            self.handlingErrors(error)
          })
        }

        axios.all([getUserAccount(), getUserPermissions()])
          .then(axios.spread(function (acct, perms) {
            // Both requests are now complete
          }))
      },
      handlingErrors: function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(JSON.stringify(error.response.data))
          console.log(error.response.status)
          console.log(JSON.stringify(error.response.headers))
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
        console.log(error.config)
      }
    }
  }
</script>
<style>

</style>
