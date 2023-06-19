<script setup>
import ChildCards from '../components/ChildCards.vue'
</script>

<template>
  <div class="parent-cards">
    <h1>Parent to Child</h1>
    <ul>
      <li>Pass data from parent to child</li>
      <li>Reuse componenet</li>
      <li>Call Parent's method from Child componenet</li>
    </ul>
    <ul class="parent-ul">
      <li v-for="card in cards">
        <ChildCards :card="card" :callingFromParents="callingFromParents" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          profile: 'HR',
          id: 1
        },
        {
          profile: 'DEV',
          id: 2
        }
      ]
    }
  },
  methods: {
    callingFromParents: function (profile) {
      alert(profile)
    }
  }
}
</script>

<style scoped>
ul.parent-ul {
  list-style: none;
  display: flex;
  padding: 0;
}
</style>
