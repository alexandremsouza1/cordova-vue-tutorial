# cordova_vue_demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# vue-cordova add plugin
在 node_modules 目录中找到 vue-cordova/index.js
1、pluginsList 中添加插件名
2、map中 添加插件名 
  "./cordova-plugin-file": 6,
  "./cordova-plugin-file.js": 6,
3、按照下面的代码格式进行添加插件信息
function(module, exports) {

    'use strict';

    exports.install = function (Vue, options, cb) {
      document.addEventListener('deviceready', function () {

        if (typeof cordova.InAppBrowser === 'undefined') {
          return cb(false);
        }

        // pass through the geolocation object
        Vue.cordova.InAppBrowser = cordova.InAppBrowser;

        return cb(true);
      }, false);
    };
}
即为增加cordova插件

#创建Cordova
    
    创建工程CLI：cordova create cordova_webpack_vue_demo com.cwvd.demo CWVD_Demo
    添加平台CLI：cordova platform add ios --save
              cordova platform add android --save
    注意:在你使用CLI创建应用的时候， 不要 修改/platforms/目录中的任何文件。当准备构建应用或者重新安装插件时这个目录通常会被重写。
    查看当前平台：cordova platform ls
  
#更新Cordova和你的项目
 
    更新到最新版：npm update -g cordova
    更新到指定版本：npm install -g cordova@7.0.1
    更新完cordova后，更新目标项目的平台
    $ cordova platform update android --save
    $ cordova platform update ios --save
#配置Gradle和签名应用

    1、gradle.properties 配置gradle
    2、By extending 通过一个build-extras.gradle文件扩展build.gradle 配置gradle
    3、签名命令
    cordova run android --release -- --keystore=E:/web_test/cordova_webpack_vue_demo/cwv_demo.jks --storePassword=cwv_demo --alias=cwv_demo --password=cwv_demo
    cordova build android --release -- --keystore=E:/web_test/cordova_webpack_vue_demo/cwv_demo.jks --storePassword=cwv_demo --alias=cwv_demo --password=cwv_demo
    4、通过build.json 打包项目 
    cordova build --release
    注意：当你使用了gradle.properties 时，build.json不生效
#设置Version Code(版本编码)

    要改变你的应用程序的生成APK的version code,你可以设置应用程序config.xml文件的widget元素的android-versionCode属性。如果android-versionCode没有设置,版本编码将由version属性决定。例子,如果版本是MAJOR.MINOR.PATCH:
    versionCode = MAJOR * 10000 + MINOR * 100 + PATCH

#平台和插件版本管理

#平台版本控制

    为了保存一个平台，你可以执行下面命令:
    cordova platform add <platform[@<version>] | directory | git_url> --save
    'cordova platform add android --save' => 检索固定版本的android平台，将其添加到项目中，然后更新config.xml。
    'cordova platform add android@3.7.0 --save' => 从npm中检索版本为3.7.0的android平台，将其添加到项目中，然后更新config.xml。
    以下两条命令可以将已有android项目添加到cordova项目中
    'cordova platform add android@https://github.com/apache/cordova-android.git​ --save' => 克隆指定的cordova-androidgit仓库，将android平台添加到项目中，然后更新config.xml并指向特定git-url的版本。
    'cordova platform add C:/path/to/android/platform --save' => 从特定目录索引android平台，将其添加到项目中，然后更新config.xml并指向目录。
    
#在现存项目上集中保存平台信息

    当在添加平台的时候记得使用'--save'标志上十分有用，可你帮你将平台信息维护到config.xml中。 如果你有一个现存项目并且你想保存所有的当前添加的平台信息到你的项目的config.xml中，你可以使用:
    cordova platform save
    
#更新/移除平台

    在'cordova platform update'和 'cordova platform remove'命令执行的时候，你可能也需要更新/删除config.xml平台配置信息 :
    cordova platform update <platform[@<version>] | directory | git_url> --save
    cordova platform remove <platform> --save
    
    'cordova platform update android --save' => 除了更新android平台到固定版本，同时也更新config.xml中对应的条目
    'cordova platform update android@3.8.0 --save' => 除了更新android平台到3.8.0版本，同时也更新config.xml中对应的条目
    'cordova platform update /path/to/android/platform --save' => 除了更新android平台到文件夹指定的版本，同时也更新config.xml中对应的条目
    'cordova platform remove android --save' => 从项目中移除android平台并从config.xml删除对应的条目。
    
#恢复平台

    当'cordova prepare'命令执行的时候，平台会自动从config.xml中恢复。
    如果你添加一个平台没有指定版本/文件夹/git_url，这个版本就会安装config.xml里面，如果发现有。
    例子:
    
    假设你的config.xml文件包含下面条目:
    
    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="3.7.0" />
        ...
    </xml>
    如果你运行下面命令'cordova platform add android' (没有version/folder/git_url指定), 平台'android@3.7.0'会被安装 (因为从config.xml里面检索)。

#存储数据

一些存储类API对Cordova应用同样适用。完整的介绍和示例可以浏览html5rocks网站上的存储概览和使用指南。这里总结了每个API的优点和不足，你应该选择最适合自己需求的。当然你也可以在一个应用中针对不同的场景使用不同的API。

   LocalStorage
   
   LocalStorage提供了简单和同步的键值对存储方式，而且在各个Cordova平台，底层的WebView实现都支持它。
   
       优点
       所有Cordova平台支持.
       它是简单并且同步的API，意味着使用很容易。
       
       不足
       只能存储字符串，所以复杂的数据结构必须被序列化才能存储。而且数据必须要能序列化，否则不能存储。
       对大容量数据的支持很差，尤其在以下几个方面：
       索引的欠缺意味着查询操作需要手动遍历所有数据。
       存储复杂或者大量的数据会比较慢，因为要执行序列化和反序列化操作。
       同步的API意味着API执行的时候会锁定用户界面。
       存储容量有限制（一般为5MB）。
       
       在IOS系统中，当空间不足的时候，系统可能会清空LocalStorage。
       
   WebSQL
   
   WebSQL提供了在结构化数据库中存储数据的API，这个数据库可以使用标准的SQL语法查询（实际上是SQLite）。
   同样的，WebSQL也提供了强大和复杂的SQL查询能力。
   
   它只被以下Cordova平台的底层WebView实现支持：
   
   Android
   BlackBerry 10
   iOS
   
   使用数据库版本
   当打开一个已存在的数据库，如果指定的版本和数据库的版本不匹配，数据库会报异常并且无法打开。但是，如果你指定的版本是一个空字符串，无论数据库当前是什么版本，它都会打开（你可以通过db.version查看当前版本）。然而，谨慎起见，当数据库创建的时候，它的版本会赋给一个空字符串。
   
       优点
       性能良好 - 数据可以索引从而提供快速查询，而且异步API意味着不会锁定用户界面。
       事务型数据库模型的健壮性。
       提供版本支持。
       
       不足
       不是所有Cordova平台都支持。
       比LocalStorage和IndexedDB复杂。
       WebSQL API已弃用。它不太可能在目前不支持它的平台上获得支持，甚至有可能被移除。
       需要预先定义严格的结构。
       存储容量有限制（一般为5MB）。
       
IndexedDB(不支持IOS系统)

ndexedDB的目标是结合LocalStorage和WebSQL的优点并避免它们的缺点。IndexedDB允许你存储任意的JavaScript对象（由structured clone algorithm提供支持）并以一个键来索引。它不需要限制结构或者提前定义就能提供SQL表的一些好用的功能。

IndexedDB提供了一个简单的容易理解的数据模型，很像LocalStorage。但和LocalStorage不同的是，你可以创建多个数据库，一个数据库多条存储数据。并且异步的API和索引支持提供了更好的性能表现。

Windows的限制
Windows平台对IndexedDB的支持不完整。例如，它缺少以下的特性：

在web workers里面不可用。
不支持数组keyPaths。
不支持数组Key。
混合索引不支持对象查找。

优点
性能良好 - 异步API不会锁定用户界面，而且索引功能提供了良好的搜索性能。
数据模型简单，比SQL还容易学习。
比WebSQL更弹性的数据结构。
多数据和多对象存储提供了比LocalStorage更丰富的数据结构。
事务型数据库模型的健壮性。
提供版本支持。
不足
IOS平台不支持。
带嵌套回调，API复杂。
存储容量有限制（一般为5MB）。


SQLite 插件
https://www.npmjs.com/package/cordova-sqlite-storage

#cordova-plugin-file 读写文件插件
cordova plugin add cordova-plugin-file
官方：http：//cordova.axuer.com/docs/zh-cn/latest/reference/cordova-plugin-file/index.html
github中文：https://github.com/CordovaCn/CordovaCn/blob/master/02%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8(About%20Plugin)/09.cordova-plugin-file.md
cordova 读写文件教程
https://www.tutorialspoint.com/cordova/cordova_file_system.htm

#Axios
https://www.npmjs.com/package/axios#axiosrequestconfig-1
https://github.com/mzabriskie/axios

#创建插件命令
Create A Plugin

     # plugman create --name EchoPlugin --plugin_id cordova-plugin-echo --plugin_version 0.0.1 --path D://
     $ plugman create --name <pluginName> --plugin_id <pluginID> --plugin_version
    <version> [--path <directory>] [--variable NAME=VALUE]

    Parameters:
     - <pluginName>: The name of the plugin
     - <pluginID>: An ID for the plugin, ex: org.bar.foo
     - <version>: A version for the plugin, ex: 0.0.1
     - <directory>: dAn absolute or relative path for the directory where the plugin
                               project will be create
     - variable NAME=VALUE: Extra variables such as description or Author

Add a Package.JSON file to plugin
    
    Creates a package.json file in the plugin based on values from plugin.xml.
    # plugman createpackagejson D://EchoPlugin
     $ plugman createpackagejson <directory>
   注意：在执行createpackagejson 命令时，若没有生成package.json。请手工创建空的package.json文件
        在执行命令将相关的信息写入package.json


Add a Platform to a Plugin

    #plugman platform add --platform_name android
    $ plugman platform add --platform_name <platform>

    Parameters:
    
    - <platform>: One of android, ios
    
    Remove a Platform from a Plugin
    
        $ plugman platform remove --platform_name <platform>
    
    Parameters:
    
    - <platform>: One of android, ios
   注意：
      plugin.xml内容格式如下，请求改"platform" ->"config-file"->"feature"->"value"属性值
      和 "platform" ->"source-file"->"target-dir" 属性值 为指定目录。
      修改后再将插件添加到项目中。
      
      <?xml version='1.0' encoding='utf-8'?>
      <plugin id="cordova-plugin-echo" version="0.0.1" xmlns="http://apache.org/cordova/ns/plugins/1.0"
              xmlns:android="http://schemas.android.com/apk/res/android">
          <name>EchoPlugin</name>
          <js-module name="EchoPlugin" src="www/EchoPlugin.js">
              <clobbers target="cordova.plugins.EchoPlugin"/>
          </js-module>
          <platform name="android">
              <config-file parent="/*" target="res/xml/config.xml">
                  <feature name="EchoPlugin">
                      <param name="android-package" value="com.cwvd.demo.plugin.EchoPlugin"/>
                  </feature>
              </config-file>
              <config-file parent="/*" target="AndroidManifest.xml"></config-file>
              <source-file src="src/android/EchoPlugin.java" target-dir="src/com/cwvd/demo/plugin/EchoPlugin"/>
          </platform>
      </plugin>
      
      
#webpack
      官网指南：https://doc.webpack-china.org/guides/
      自动生成html插件： https://github.com/jantimon/html-webpack-plugin
                博客：https://segmentfault.com/a/1190000007294861
      拷贝资源文件插件：https://github.com/jharris4/html-webpack-include-assets-plugin
                     https://github.com/kevlened/copy-webpack-plugin
      生产环境打包命令：webpack -p 执行此命令直接可以混淆js
                     也可通过"UglifyJsPlugin"插件进行混淆

#单页面应用
    
    博客:http://island205.github.io/Single-Page-App-Break/index.html

#调试命令
adb logcat chromium:D SystemWebViewClient:D *:S
