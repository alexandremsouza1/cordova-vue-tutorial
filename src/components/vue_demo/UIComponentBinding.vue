<template>
  <div>
    <h1>绑定控件</h1>
    <input type="checkbox" v-bind:checked="checked" v-on:change="check()">v-bind
    <label>{{ checked }}</label>
    <p>此处为单向绑定</p>
    <hr color="green">
    <p>因此vue引入了一个指令v-mode，保证双向绑定</p>
    <label><input id="checkbox" type="checkbox" v-model="checked1">v-model</label>
    <label for="checkbox">{{ checked1 }}</label>
    <hr color="green">
    <h2>text</h2>
    <!--双向绑定-->
    <p>控件text是最常见的了，可以这样做双向绑定：</p>
    <input type="text" v-model="message"><span>{{message}}</span>
    <p>checkbox</p>
    <p>在单个checkbox的情况下：此checkbox会和数据项checked形成双向绑定:</p>
    <input type="checkbox" v-model="checked2"><label>{{ checked2 }}</label>
    <hr color="green">
    <p>在多个checkbox的情况下：会和checks形成双向绑定。checks是一个数组</p>
    <input type="checkbox" value="1" v-model="checks">
    <input type="checkbox" value="2" v-model="checks">
    <input type="checkbox" value="3" v-model="checks">
    <label for="checkbox">{{ checks }}</label>
    <hr color="green">
    <p>此控件可以成组使用，组内互斥选择，最后只能选择一项目</p>
    <input type="radio" value="1" v-model="which">
    <input type="radio" value="2" v-model="which">
    <span>{{ which }}</span>
    <hr color="green">
    <p>select</p>
    <p>此控件允许多选和单选。在单选的情况下，v-model指向到单项数据：</p>
    <select v-model="which1">       
      <option which1>1</option>
            
      <option>2</option>
      <option>3</option>
    </select>
    <span>which: {{ which1 }}</span>
    <hr color="green">
    <P>多选情况下，则v-model对应的是一个数组：</P>
    <select v-model="whichs" multiple>       
      <option>1</option>
            
      <option>2</option>
      <option>3</option>
    </select>
    <span>which: {{ whichs }}</span>
    <hr color="green">
    <textarea v-model="msg" placeholder="input some lines"></textarea>
    <p style="white-space: pre">message:<br>{{ msg }}</p>

  </div>
</template>
<script>
  export default{
    data () {
      return {
        checked: true,
        checked1: true,
        checked2: true,
        message: 'Hello',
        checks: ['1', '2'],
        which: '2',
        which1: '2',
        whichs: ['2', '3'],
        msg: ''
      }
    },
    methods: {

      // 把checked数据绑定到input的checked属性上。然而，这样的绑定都是单向的，就是说：
      // 如果checked数据修改了，那么DOM属性就会修改。
      // 如果DOM属性修改了，checked数据并不会修改。
      check: function () {
        // 此处需要添加此方法来改变数据
        // this.checked = !this.checked
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

  #app {
    text-align: center;
  }
</style>
