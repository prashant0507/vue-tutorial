<template>
  <div class="class-binding">
    <h1>Class Binding</h1>

    <h2 class="green">Static class</h2>
    <br />

    <h2 class="anotheclass" :class="{ green: colorfull }">
      Dynamic class and extra Class => :class="{green:colorfull}"
    </h2>
    <br />

    <h2 :class="{ green: toggleColorfull }">Apply Class using boolean => :class="{green:colorfull}"</h2>
    <button @click="toggleColorfull = !toggleColorfull">Toggle Class => @click="colorfull = !colorfull"</button>
    <br />
    <br />

    <h2 :class="applyStyle">Apply class using computed property => :class="applyStyle"</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorfull: true,
      toggleColorfull: true
    }
  },
  computed: {
    applyStyle: function () {
      return {
        green: this.colorfull,
        err: true,
        bold: true
      }
    }
  }
}
</script>

<style scoped>
.green {
  background-color: green;
}
.anotheclass {
  color: yellow;
}
.err {
  color: grey;
}
.bold {
  font-weight: bold;
}
</style>
