<template>
  <div id="app">
    <nav>
      <div class="nav-left">
        <router-link to="/">Home</router-link>
        <router-link to="/chat">Chat</router-link>
        <router-link to="/Admin">Admin</router-link>
      </div>
      <div class="nav-right">
        <LogoComponent />
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import LogoComponent from '@/components/LogoComponent.vue';

export default {
  components: {
    LogoComponent,
  },
};
</script>
