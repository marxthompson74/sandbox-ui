<template>
  <div class="home-container">
    <!-- Title Section -->
    <div >
      <h2 class="title">Admin</h2>
    </div>
    <!-- Services Section -->
    <div class="services-grid">
      <BigDataComponent/>
    </div>
  </div>
</template>

<script>
import BigDataComponent from '@/components/BigDataComponent.vue';
export default {
  components: {
    BigDataComponent,
  },
};
</script>
