<template>
  <div>
    <ul>
      <li>
        <router-link to="/WebSQL">WebSQL</router-link>
      </li>
      <li>
        <router-link to="/IndexedDB">IndexedDB</router-link>
      </li>
      <li>
        <router-link to="/CordovaFilePlugin">FilePlugin</router-link>
      </li>
      <li>
        <router-link to="/CordovaSQLitePlugin">SQLitePlugin</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
  }
</script>
<style>
  ul {
    position: absolute;
    width: 90%;
    height: 90%;
    border: 1px solid red;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
  }

  li {
    line-height: 2;
    vertical-align: middle;
    border: 1px solid green;
    text-align: center;
    color: black;
  }
</style>
