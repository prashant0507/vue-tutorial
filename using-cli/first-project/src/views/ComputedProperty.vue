<template>
  <div class="computed-property">
    <h1>Computed Property</h1>

    <ul>
        <li>If there is any complicated calculation that case will go with Computed Properties</li>
        <li>If there is simplest calculation, will go with template calculation</li>
        <li>Computed property used cache, it's fast as compare to Template calculation</li>
    </ul>

    <h2>Using Template</h2>
    <h3> => {{ (dollors * rupee) - discount }}</h3>

    <h2>Using Computed Properties</h2>
    <h3> => {{getResult}}</h3>

    <h2>Using Method Properties</h2>
    <h3> => {{getResultByMethods()}}</h3>

    


  </div>
</template>

<script>
export default {
  data() {
    return {
      dollors: 100,
      rupee: 70,
      discount: 10
    }
  },
  computed: {
    getResult: function(){
      return (this.dollors * this.rupee) - this.discount;
    }
  },
  methods: {
      getResultByMethods: function(){
      return (this.dollors * this.rupee) - this.discount;
    }
  }
}
</script>
