<template>
  <div class="variable">
    <h1>Variable</h1>
    <div>{{ email }}</div>
    <div>{{ 10 + 20 }}</div>
    <!--<div> {{ email = 'abc.com' }} </div>--> <!-- it's valid -->
  </div>
</template>

<script>
export default {
  data() {
    return {
        email:'pra98935@gmail.com'
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>