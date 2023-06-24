<script setup>
import ChildSlots from '../components/ChildSlots.vue';
import ChildMultiSlots from '../components/ChildMultiSlots.vue';
</script>

<template>
  <div class="slots">
    <h1>Slots (kind of ng-content in angular)</h1>

    <p>We can create one slot into another slot</p>
    
    <br/>
    <h1>Single Slots</h1>
    <ChildSlots> <h3>This is Heading passing from parent</h3> </ChildSlots>
    
    <br/>
    <ChildSlots> <p>This is image passing from Parent</p> <img width="200" src="@/assets/logo.svg" /> </ChildSlots>
    
    <br/>
    <ChildSlots></ChildSlots>

    <br/>
    <h1>Multi Slots</h1>
    <ChildMultiSlots>
        <template v-slot:header><h2>This is Header</h2></template>
        <template v-slot:article><p>This is Article</p></template>
        <template v-slot:footer><h2>This is Footer</h2></template>
    </ChildMultiSlots>
    <br/>
    <ChildMultiSlots>
        <template v-slot:header><h2>This is Header2</h2></template>
        <template v-slot:article><p>This is Article2</p></template>
        <template v-slot:footer></template> <!-- footer will take default value -->
    </ChildMultiSlots>
  </div>
</template>

<script>
export default {
  data() {
    return {
        
    }
  }
}
</script>
