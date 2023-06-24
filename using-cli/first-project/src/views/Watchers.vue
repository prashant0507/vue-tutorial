<template>
  <div class="watchers-property">
    <h1>Watchers</h1>

    <ul>
      <li>It will detect changes whenever value will update</li>
      <li>watcher's method name should be equal to property</li>
    </ul>

    <h2>{{ counter }}</h2>
    <button @click="counter = counter + 1">Increase</button>
    <button @click="counter = counter - 1">Decrease</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  watch: {
    counter(current, previous) {
      // method name should be equal to property
      alert('current value=>' + current + ' | ' + 'previous value=>' + previous)
    }
  }
}
</script>
