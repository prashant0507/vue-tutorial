<template>
  <div class="methods">
    <h1>Methods</h1>
    {{getObj()}} - {{getObj().city}}
    <p>{{ name }}</p>
    <button @click="setName('Prashant Shrvastava')">Set Name</button>
    <button @click="getName()">Get Name</button>
    <button @click="updateName()">Update Name</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Prashant',
      obj:{
          city:'Gwalior',
          state:'MP'
      }
    }
  },
  methods: {
    setName: function (name) {
        this.name = name
    },
    getName: function () {
        alert(this.name);
    },
    getObj: function () {
        return this.obj;
    },
    updateName: function () {
        this.name = 'name is udated';
        alert(this.name);
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
