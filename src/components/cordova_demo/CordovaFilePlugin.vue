<template>
  <div>
    <button v-on:click='onReadVarClick'>读取变量</button>
    <button v-on:click='onCreateFileClick'>创建文件</button>
    <button v-on:click='onWriteFileClick'>写文件</button>
    <button v-on:click='onReadFileClick'>读文件</button>
    <button v-on:click='onRemoveFileClick'>删除文件</button>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default{
//    data () {
//      return {
//        cordova: Vue.cordova,
//        plugins: {
//          'cordova-plugin-file': function () {
//          }
//        }
//      }
//    },
    methods: {
      onCreateFileClick: function () {
        alert(this.cordova.deviceready)
        alert(this.cordova.file)
        window.resolveLocalFileSystemURL(Vue.cordova.file.externalDataDirectory, successCallback, errorCallback)
        function successCallback (dir) {
          dir.getFile('log.txt', {create: true}, function (fileEntry) {
            alert(fileEntry + 'File creation successfull!')
          }, errorCallback)
        }

        function errorCallback (error) {
          alert('ERROR: ' + this.handleErrors(error.code))
        }
      },

      onWriteFileClick: function () {
        window.resolveLocalFileSystemURL(Vue.cordova.file.externalDataDirectory, successCallback, errorCallback)
        function successCallback (dir) {
          dir.getFile('log.txt', {create: true}, function (fileEntry) {
            fileEntry.createWriter(function (fileWriter) {
              fileWriter.onwriteend = function (e) {
                alert('Write completed.')
              }

              fileWriter.onerror = function (e) {
                alert('Write failed: ' + e.toString())
              }

              var blob = new Blob(['Lorem Ipsum'], {type: 'text/plain'})
              fileWriter.write(blob)
            }, errorCallback)
          }, errorCallback)
        }

        function errorCallback (error) {
          alert('ERROR: ' + this.handleErrors(error.code))
        }
      },

      onReadFileClick: function () {
        window.resolveLocalFileSystemURL(Vue.cordova.file.externalDataDirectory, successCallback, errorCallback)
        function successCallback (dir) {
          dir.getFile('log.txt', {}, function (fileEntry) {
            fileEntry.file(function (file) {
              var reader = new FileReader()
              reader.onloadend = function (e) {
                alert(this.result)
              }
              reader.readAsText(file)
            }, errorCallback)
          }, errorCallback)
        }

        function errorCallback (error) {
          alert('ERROR: ' + this.handleErrors(error.code))
        }
      },

      onRemoveFileClick: function () {
        window.resolveLocalFileSystemURL(Vue.cordova.file.externalDataDirectory, successCallback, errorCallback)
        function successCallback (dir) {
          dir.getFile('log.txt', {create: false}, function (fileEntry) {
            fileEntry.remove(function () {
              alert('File removed.')
            }, errorCallback)
          }, errorCallback)
        }

        function errorCallback (error) {
          alert('ERROR: ' + this.handleErrors(error.code))
        }
      },

      onReadVarClick: function () {
        // cordova.file.applicationDirectory  - App的安装路径，只读目录。 (iOS, Android, BlackBerry 10, OSX, windows)
        alert('App的安装路径' + Vue.cordova.file.applicationDirectory)
        // App的沙盒根目录，iOS&Windows是只读的，但是子目录是可读写的，所有内容都是App私有的。(iOS, Android, BlackBerry 10, OSX)
        alert('App的沙盒路径' + Vue.cordova.file.applicationStorageDirectory)
        // 持久和私有数据存储在沙盒中，使用内部闪存(在Android如果需要使用外部存储介质，需要使用
        // .externalDataDirectory ). 在iOS系统，这个目录是不盒iCloud同步的(使用 .syncedDataDirectory 目录会同步到iCloud). (iOS, Android, BlackBerry 10, windows)
        alert('持久和私有数据存储在沙盒中' + Vue.cordova.file.dataDirectory)
        // 缓存文件的目录，你可以很容易的创建缓存文件，系统会在存储空间不足的时候自动删除这些缓存文件，
        // 然而，App是不应该依赖于系统去删除缓存文件的。 (iOS, Android, BlackBerry 10, OSX, windows)
        alert('缓存文件的目录' + Vue.cordova.file.dataDirectory)
        // App的外部空间(sd card?)。 (Android)
        alert('App的外部空间' + Vue.cordova.file.externalApplicationStorageDirectory)
        // 用于存储文件到外部存储空间。 (Android)
        alert('外部存储文件' + Vue.cordova.file.externalDataDirectory)
        // 缓存文件到外部存储空间。 (Android)
        alert('外部缓存目录' + Vue.cordova.file.externalCacheDirectory)
        // 外部存储空间根目录(SD card)。 (Android, BlackBerry 10)
        alert('外部存储空间根目录(SD card)' + Vue.cordova.file.externalRootDirectory)
        // 临时目录，系统会清理，但是不要依赖于系统去清理该目录，最好自己处理一下。(iOS, OSX, windows)
        alert('临时目录' + Vue.cordova.file.tempDirectory)
        // 同步文件。(e.g. to iCloud). (iOS, windows)
        alert('同步文件目录' + Vue.cordova.file.syncedDataDirectory)
        // 私有文件，其他App无法访问，对于_OSX_这个目录是 ~/Documents 。 (iOS, OSX)
        alert('私有文件目录' + Vue.cordova.file.documentsDirectory)
      },
      handleErrors: function (error) {
        if (error === 1) {
          return 'NOT_FOUND_ERR'
        } else if (error === 2) {
          return 'SECURITY_ERR'
        } else if (error === 3) {
          return 'ABORT_ERR'
        } else if (error === 4) {
          return 'NOT_READABLE_ERR'
        } else if (error === 5) {
          return 'ENCODING_ERR'
        } else if (error === 6) {
          return 'NO_MODIFICATION_ALLOWED_ERR'
        } else if (error === 7) {
          return 'INVALID_STATE_ERR'
        } else if (error === 8) {
          return 'SYNTAX_ERR'
        } else if (error === 9) {
          return 'INVALID_MODIFICATION_ERR'
        } else if (error === 10) {
          return 'QUOTA_EXCEEDED_ERR'
        } else if (error === 11) {
          return 'TYPE_MISMATCH_ERR'
        } else if (error === 12) {
          return 'PATH_EXISTS_ERR'
        }
      }
    }
  }
</script>
<style>

</style>
