<template>
  <div class="html-binding">
    <h1>Html Binding</h1>
    <div>{{ text1 }}</div>
    <div v-html="text1"></div>
    <div v-html="text2"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            text1:"<h2>Prashant Shrivastava</h2>",
            text2:"<h2>Mini Shrivastava</h2>"
        }
    }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>