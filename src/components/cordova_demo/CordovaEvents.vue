<template>
  <div>

  </div>
</template>
<script>
  // 注意，只有在设备上才能执行以下生命周期回调。浏览器中不能执行
  // 等待设备API库加载好
  document.addEventListener('deviceready', onDeviceReady, false)
  // 设备API可以使用了
  //
  function onDeviceReady () {
    document.addEventListener('pause', onPause, false)
    document.addEventListener('resume', onResume, false)
    document.addEventListener('menubutton', onMenuKeyDown, false)
    // document.addEventListener('backbutton', onBackbuttonClick, false)
    document.addEventListener('volumedownbutton', onVolumedownbuttonClick, false)
    document.addEventListener('volumeupbutton', onVolumeupbuttonbuttonClick, false)
    // 给其他事件添加类似的监听
  }

  function onPause () {
    // 处理暂停事件
    console.log('onPause')
  }

  function onResume () {
    // 处理恢复事件
    console.log('onResume')
  }

  function onMenuKeyDown () {
    // 处理'菜单'按钮事件
    console.log('onMenuKeyDown')
  }

//  function onBackbuttonClick () {
//    // 处理回退按钮点击事件
//    console.log('onBackbuttonClick')
//    // 此处重写了默认的回退按钮事件
//    // window.location.href = 'MainMenu.html'
//  }

  function onVolumedownbuttonClick () {
    // 处理音量减点击事件
    console.log('onVolumedownbuttonClick')
  }

  function onVolumeupbuttonbuttonClick () {
    // 处理音量加点击事件
    console.log('onVolumeupbuttonbuttonClick')
  }
  export default{
  }
</script>
<style></style>
