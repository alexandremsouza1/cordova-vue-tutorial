<template>
  <div>
    <input type="button" v-on:click="onInsertClick()" value="插入数据">
    <input type="button" v-on:click="onUpdateClick()" value="更新数据">
    <input type="button" v-on:click="onDeleteClick()" value="删除数据">
    <input type="button" v-on:click="onSelectClick()" value="查询数据">
  </div>
</template>
<script>
  //  name (string): 数据库的唯一名称，会被存在磁盘当中。
  //   version (string): 数据库的版本。
  //   displayName (string): 数据库的让人容易懂的名字，会被系统用来向用户描述这个数据库。
  //   estimatedSize (number): 数据库的预期最大容量，字节为单位。当数据库容量增长的时候，可能会提示用户获取授权。如果你设置了一个合理的容量，以后的提示就会比较少。
  var name = 'mydb'
  var version = '1.0'
  var displayName = 'Test DB'
  var estimatedSize = 1024 * 1024 * 2
  var db = window.openDatabase(name, version, displayName, estimatedSize)
  export default{
    methods: {
      onInsertClick: function () {
        // 基础语法
//        var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
//         db.transaction(function (tx) {
//         tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
//         tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "菜鸟教程")');
//         tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "www.runoob.com")');
//         });

//        var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
//         db.transaction(function (tx) {
//         tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
//         tx.executeSql('INSERT INTO LOGS (id,log) VALUES (?, ?)', [e_id, e_log]);
//         });

        // 插入数据
        db.transaction(function (txn) {
          txn.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)', [], function (tx, results) {

          }, function (tx, error) {
            alert('创建表失败: ' + error.message)
          })
          txn.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar")', [], function (tx, results) {

          }, function (tx, error) {
            alert('插入数据失败: ' + error.message)
          })
          txn.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")', [], function (tx, results) {

          }, function (tx, error) {
            alert('插入数据失败: ' + error.message)
          })
        })
      },
      onUpdateClick: function () {
        // 基础语法
//        db.transaction(function (tx) {
//         tx.executeSql('UPDATE LOGS SET log=\'www.w3cschool.cc\' WHERE id=2');
//         });
//
//        db.transaction(function(tx) {
//         tx.executeSql('UPDATE LOGS SET log=\'www.w3cschool.cc\' WHERE id=?', [id]);
//         });

        // 更新数据
        db.transaction(function (txn) {
          txn.executeSql('UPDATE LOGS SET log=? WHERE id=?', ['foobar1', 1], function (tx, result) {
            alert(result)
          },
          function (tx, error) {
            alert('更新失败: ' + error.message)
          })
        })
      },

      onDeleteClick: function () {
        // 基础语法
//        db.transaction(function (tx) {
//         tx.executeSql('DELETE FROM LOGS  WHERE id=1');
//         });

//        db.transaction(function(tx) {
//         tx.executeSql('DELETE FROM LOGS WHERE id=?', [id]);
//         });

        // 删除数据
        db.transaction(function (txn) {
          for (var id = 1; id < 3; id++) {
            txn.executeSql('DELETE FROM LOGS WHERE id=?', [id], function (tx, result) {

            }, function (tx, error) {
              alert('删除失败: ' + error.message)
            })
          }
        })

        // 错误实例，循环操作事物
        for (var id = 1; id <= 2; id++) {
          db.transaction(function (txn) {
            txn.executeSql('DELETE FROM LOGS WHERE id=?', [id], function (tx, result) {
            },
              function (tx, error) {
                alert('删除失败: ' + error.message)
              })
          })
        }
      },

      onSelectClick: function () {
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
<style>

</style>
