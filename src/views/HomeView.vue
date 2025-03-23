<template>
  <div class="home-container">
    <!-- Title Section -->
    <div >
      <h2 class="title">Our Services</h2>
    </div>
    <!-- Services Section -->
    <div class="services-grid">
      <div v-for="service in services" :key="service.title" class="service-card">
        <div class="icon-container">
          <img :src="service.icon" alt="Service Icon" class="service-icon" />
        </div>
        <h3 class="service-title">{{ service.title }}</h3>
        <p class="service-description">{{ service.description }}</p>
        <button class="more-button">MORE</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Massage Therapy",
          description: "Sample text. Click to select the text box...",
          icon: require('@/assets/image-1.jpg'), // Replace with actual image
        },
        {
          title: "Yoga",
          description: "Sample text. Click to select the text box...",
          icon: require('@/assets/image-2.jpg'), // Replace with actual image
        },
        {
          title: "Facials",
          description: "Sample text. Click to select the text box...",
          icon: require('@/assets/image-3.jpg'), // Replace with actual image
        },
      ],
    };
  },
};
</script>
