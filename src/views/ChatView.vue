<template>
  <div class="home-container">
    <!-- Title Section -->
    <div >
      <h2 class="title">Contact Us</h2>
    </div>
    <!-- Services Section -->
    <div class="services-grid">
      <MessageComponent/>
    </div>
  </div>
</template>

<script>
import MessageComponent from '@/components/MessageComponent.vue';
export default {
  components: {
    MessageComponent,
  },
};
</script>
