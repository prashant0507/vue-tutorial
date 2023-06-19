<template>
  <div class="two-way-binding">
    <h1>Two Way Binding</h1>
    <input type="text" placeholder="Your Name" v-model="name">
    <p>{{name}}</p>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                name:''
            }
        }
    }
</script>

<style scoped>
h1 {
  color: red;
}
</style>