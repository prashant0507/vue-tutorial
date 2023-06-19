<template>
  <div class="For Loop">
    <h1>For Loop with Array</h1>
    <ul>
      <li v-for="state in states" :key="state">
        {{ state }}
      </li>
    </ul>

    <h1>For Loop with Array Object</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }} - {{ user.designation }}</li>
    </ul>

    <h1>For Loop with Object</h1>
    <ul>
      <li v-for="(value, key) in company" :key="value">{{ key }} - {{ value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      states: ['mp', 'up', 'ap'],
      users: [
        {
          name: 'employee1',
          designation: 'HR',
          id: 1
        },
        {
          name: 'Dev1',
          designation: 'Vue',
          id: 2
        }
      ],
      company: {
        name: 'xyz',
        employee: 1000
      }
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
