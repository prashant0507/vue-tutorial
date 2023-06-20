<template>
  <div class="props-child">
    <h2>Props Child 1</h2>
    <p>{{name}} - {{age}}</p> 
    <button @click="getProfile(profile)">Child To Parent</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        profile:{
            name:'Ajay',
            age:30,
            hobby:['dance', 'sports']
        }
    }
  },
  props:{
      name: String,
      age: Number,
      getProfile: Function
  }
}
</script>
