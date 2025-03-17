<template>
  <div id="app">
    <nav>
      <div class="nav-left">
        <router-link to="/">Home</router-link>
        <router-link to="/chat">Chat</router-link>
      </div>
      <div class="nav-right">
        <LogoDisplay />
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import LogoDisplay from '@/components/LogoDisplay.vue';

export default {
  components: {
    LogoDisplay,
  },
};
</script>

<style>
#app {
  background-image: url('./assets/background.jpg'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}

nav {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-family: Arial, sans-serif;
}

.nav-left {
  display: flex;
  gap: 20px;
}

.nav-right {
  margin-left: auto; /* Pushes the logo to the furthest right */
  display: flex;
  align-items: center;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

nav a:hover {
  text-decoration: underline;
}
</style>


