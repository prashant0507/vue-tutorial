<template>
  <div class="props-child">
    <h2>Props Child 2</h2>
    <p>{{name}} - {{age}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props:{
      name: String,
      age: Number
  }
}
</script>
