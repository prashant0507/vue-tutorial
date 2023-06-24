<script setup>
import Variable from './Variable.vue'
import TwoBinding from './TwoBinding.vue'
import IfEleIf from './IfEleIf.vue'
</script>

<template>
  <div class="dynamic-componenet">
    <h1>Dynamic component</h1>
    <p>How to load componenet dynamic without using if/else</p>

    <button @click="tab = 'Variable'">Variable</button>
    <button @click="tab = 'TwoBinding'">Two Way Binding</button>
    <button @click="tab = 'IfEleIf'">IfElseIf</button>

    <!-- Using If conition 
    <Variable v-if="tab === 'Variable'" />
    <TwoBinding v-if="tab === 'TwoBinding'" /> -->

    <!-- Dynamic componenet -->
    <component :is="tab" />
  </div>
</template>

<script>
export default {
  components: {
    Variable,
    TwoBinding,
    IfEleIf
  },
  data() {
    return {
      tab: 'Variable' // value should be match with component name
    }
  }
}
</script>
