<template>
  <div class="child-multi-slots">
    
    <header>
        <slot name="header"></slot>
    </header>
    
    <article>
        <slot name="article"></slot>
    </article>

    <footer>
        <slot name="footer">
            <h2>This is Footer2</h2>  <!-- This is default value -->
        </slot>
    </footer>

  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
