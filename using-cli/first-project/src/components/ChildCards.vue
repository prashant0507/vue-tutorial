<template>
  <div class="child-cards">
    <div class="box">
    {{card}}
    <button @click="callingFromParents(card.profile)">Call Parent Methods</button>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    card: Object,
    callingFromParents: Function
  }
}
</script>

<style scoped>
.box {
  border: 1px solid red;
  padding: 10px;
  height: 100px;
  width: 100px;
}
button{
  cursor: pointer;
}
</style>
