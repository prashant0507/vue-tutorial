<script setup>
import PropsChild from '../components/PropsChild.vue';
import PropsChild2 from '../components/PropsChild2.vue'
</script>

<template>
  <div class="props">
    <h1>Props (Cmponent Communication)</h1>
    <br/>
    
    <h2>We can pass data Parent to child, child to parent and Sibling</h2>
    <br/>
    
    <h1>Pass Data Parent To Child</h1>
    <PropsChild2 :age="age" name="Kumar" />
    <br/>

    <h1>Pass Data Child To Parent</h1>
    <p>Getting Data from Child => {{profile}}</p>
    <PropsChild :getProfile="getProfile" :age="age" name="Pashant"/>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
        age: 28,
        profile:{}
    }
  },
  methods:{
      getProfile: function(profile){
          console.log(profile);
          this.profile = profile;
      }
  }
}
</script>
