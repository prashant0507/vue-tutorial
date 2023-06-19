<template>
  <div class="child">
    <h1>About Child</h1>
    <p>{{name}}</p>
    <p>{{city}}</p>
    <p>{{profile}} - {{profile.name}}</p>
    <button @click="parentFun(name)"> parent function call </button>
  </div>
</template>

<script>
export default {
  name: 'AboutChild',
  props:{
      name: String,
      city: String,
      profile: Object,
      parentFun: Function
  },
  data() {
    return {
      
    }
  }
}
</script>
