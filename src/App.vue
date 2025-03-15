<template>
  <img alt="Vue logo" src="./assets/logo.png" class="logo">
  <MessageDisplay msg="Welcome to Your Vue.js App"/>
</template>

<script>
import MessageDisplay from './components/MessageDisplay.vue'

export default {
  name: 'App',
  components: {
    MessageDisplay 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .logo {
    width: 20%;
    height: auto; /* Maintain aspect ratio */
  }
}
</style>
