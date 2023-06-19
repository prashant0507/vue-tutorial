<template>
  <div class="if-else">
    <h1>If/ElseIf/Else</h1>
    <div v-if="status==true">status is true</div>
    <div v-else-if="status==false">status is false</div>
    <div v-else>status not set</div>
    <button @click="status = !status">Toggle Status</button>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                status:false // To check else part make value string
            }
        }
    }
</script>

<style scoped>
h1 {
  color: red;
}
</style>