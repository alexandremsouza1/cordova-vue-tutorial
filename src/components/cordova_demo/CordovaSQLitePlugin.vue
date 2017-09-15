<template>
  <div>
    <head>
      <meta charset="UTF-8">
      <!--<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;">-->
      <meta name="format-detection" content="telephone=no">
      <meta name="msapplication-tap-highlight" content="no">
      <meta name="viewport"
            content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
      <title>SQLitePlugin</title>
    </head>
    <body>
    <input type="button" v-on:click='onInsertClick' value="插入数据">
    <input type="button" v-on:click='onUpdateClick' value="更新数据">
    <input type="button" v-on:click='onDeleteClick' value="删除数据">
    <input type="button" v-on:click='onSelectClick' value="查询数据">
    </body>
  </div>
</template>
<script>
  import Vue from 'vue'

  document.addEventListener('deviceready', onDeviceReady, false)

  // 设备API可以使用了
  var db
  function onDeviceReady () {
    // 此接口必须在真机上运行，不能在浏览器中运行
    console.log('1:' + window.sqlitePlugin)
    console.log('2:' + Vue.cordova.sqlitePlugin)
    db = window.sqlitePlugin.openDatabase({name: 'demo.db', location: 'default'})
    console.log(db)
  }
  export default{
    methods: {
      onInsertClick: function () {
        // 插入数据
        db.transaction(function (txn) {
          txn.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)', [], function (tx, results) {

          }, function (tx, error) {
            alert('创建表失败: ' + error.message)
          })
          txn.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar2")', [], function (tx, results) {

          }, function (tx, error) {
            alert('插入数据失败: ' + error.message)
          })
          txn.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg2")', [], function (tx, results) {

          }, function (tx, error) {
            alert('插入数据失败: ' + error.message)
          })
        })
      },
      onUpdateClick: function () {
        // 更新数据
        db.transaction(function (txn) {
          txn.executeSql('UPDATE LOGS SET log=? WHERE id=?', ['foobar3', 1], function (tx, result) {
          },
          function (tx, error) {
            alert('更新失败: ' + error.message)
          })
        })
      },
      onDeleteClick: function () {
        // 删除数据
        db.transaction(function (txn) {
          for (var id = 1; id < 3; id++) {
            txn.executeSql('DELETE FROM LOGS WHERE id=?', [id], function (tx, result) {

            }, function (error) {
              alert('删除失败: ' + error.message)
            })
          }
        })
      },
      onSelectClick: function () {
        db.transaction(function (txn) {
          txn.executeSql('SELECT 42 AS `answer`', [], function (tx, res) {
            console.log(res.rows.item(0)) // {"answer": 42}
          })
        })

        db.transaction(function (txn) {
          txn.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
            var len = results.rows.length
            var i
            for (i = 0; i < len; i++) {
              alert(results.rows.item(i).log)
              console.log(results.rows.item(i).log)
            }
          }, function (tx, error) {
            alert('查询失败: ' + error.message)
          })
        })
      }
    }
  }

</script>
<style></style>
