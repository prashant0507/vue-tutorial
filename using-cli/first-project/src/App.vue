<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './views/Header.vue'
import AboutChild from './views/AboutChild.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- <Header /> -->
      <!-- <HelloWorld msg="You did it!" /> -->

      <!-- <h1>Reuse componenet</h1>
      <AboutChild
        name="prashant shrivastava"
        :parentFun="parentFun"
        :profile="profile"
      /> -->

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!--<RouterLink to="/about">About</RouterLink>-->
        <RouterLink to="/html-binding">HTML Binding</RouterLink>
        <RouterLink to="/variable">Variable</RouterLink>
        <RouterLink to="/methods">Methods</RouterLink>
        <RouterLink to="/two-way-binding">Two Way Binding</RouterLink>
        <RouterLink to="/for">For Loop</RouterLink>
        <RouterLink to="/if-else-if-else">If/Else</RouterLink>
        <RouterLink to="/forms">Form</RouterLink>
        <RouterLink to="/parent-to-child">Parent To Child</RouterLink>
        <RouterLink to="/class-binding">Class Binding</RouterLink>
        <RouterLink to="/props">Props (Component Communication)</RouterLink>
        <RouterLink to="/ref">Ref</RouterLink>
        <RouterLink to="/modifiers">Modifiers</RouterLink>
        <RouterLink to="/non-props">Non Props</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      profile: {
        name: 'prashant',
        age: 27,
        city: 'Gwalior'
      }
    }
  },
  methods: {
    parentFun(name = 'defalt') {
      alert('parent function called=>> ' + name)
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border: 1px solid var(--color-border);
  border-bottom: none;
}

nav a:last-child{
  border-bottom: 1px solid var(--color-border);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    max-width: 350px;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 0;
  }
}
</style>
