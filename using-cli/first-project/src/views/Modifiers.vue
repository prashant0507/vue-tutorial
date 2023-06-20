<template>
  <div class="modifiers">
    <h1>Modifiers / Form Modifiers</h1>
    <input type="text" v-model.lazy="lazydata" /> => v-model.lazy modifiers
    <h2>lazydata is:{{lazydata}}</h2>
    <br/>
    <input type="text" v-model.trim="trimData" /> => v-model.trim modifiers
    <h2>trimData is:{{trimData}}</h2>
    <br/>
    <input type="text" v-model.trim.lazy="combinemodi" /> => v-model.trim.lazy modifiers
    <h2>combinemodi is:{{combinemodi}}</h2>
    <br/>
    <input type="number" v-model.number="age" /> => v-model.number modifiers
    <h2>age is:{{typeof(age)}} - {{age}}</h2>

  </div>
</template>

<script>
export default {
  data() {
    return {
        lazydata:'',
        trimData:'',
        combinemodi:'',
        age:''
    }
  }
}
</script>
