<script setup>
import NonPropsChild1 from "../components/NonPropsChild1.vue"
</script>

<template>
  <div class="non-props">
    <h1>Non Props</h1>
    <ul>
      <li>We can pass two types of data Props and NonProps</li>
      <li>in Props we need to defined types</li>
      <li>in NonProps we pass static data and no need to defined type</li>
    </ul>
    <NonPropsChild1 id="id1" class="cls1" />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
