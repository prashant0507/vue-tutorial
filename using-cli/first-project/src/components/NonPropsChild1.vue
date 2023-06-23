<template>
  <!-- <div> --> <!-- Parent container -->
  
  <h1>Non Props Child1</h1>

  <h2>If there is parent container</h2>
  <p>If parent div is there, class and id will apply on parent div</p>
  <img src="@/assets/images/container.png" />

  <h2>If there is no parent container</h2>
  <p>
    If parent div is not there, class and id will not apply anywhere, until we will not bind
    manually
  </p>
  <img src="@/assets/images/not-container.png" />

  <h2>Bind Manually if Parent is not there</h2>
  <p v-bind="$attrs">
    If parent div is not there, and we want to bind attribute on specific element with p element
  </p>
  <img src="@/assets/images/custom-bind.png" />

  <h2>Bind Manually and Parent is available</h2>
  <p v-bind="$attrs">in this case attribute will apply at both place</p>
  <img src="@/assets/images/parent-custom.png" />

  <h2>Remove attribute from Parent using -> <b>inheritAttrs: false</b></h2>
  <p v-bind="$attrs">in this case attribute will apply only <b>P</b> element</p>
  <img src="@/assets/images/remove-attr-parent.png" />

  <!-- </div> -->
</template>

<script>
export default {
  // inheritAttrs: false, // Will remove attribute from Parent div
  data() {
    return {}
  }
}
</script>

<style scoped>
.cls1 {
  border: 1px solid red;
}
</style>
