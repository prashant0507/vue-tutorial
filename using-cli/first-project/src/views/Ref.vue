<template>
  <div class="ref">
    <h1>Ref</h1>
    <p>Update and Get value of DOM</p>
    <input type="text" placeholder="ref1" ref="ref1" />
    <button @click="clickOnref1()">Click Me - Ref1</button>

    <input type="text" placeholder="ref2" ref="ref2" />
    <button @click="clickOnref2()">Click Me - Ref2</button>

  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    clickOnref1: function () {
      this.$refs.ref1.focus();
      const getVal = this.$refs.ref1.value;
      this.$refs.ref1.style.color="red";
      alert(getVal);  
    },

    clickOnref2: function () {
      this.$refs.ref2.style.backgroundColor="grey";
    }
  }
}
</script>
