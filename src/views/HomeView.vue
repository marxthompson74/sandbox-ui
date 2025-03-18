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

<style scoped>
/* General Styling */
.home-container {
  color: white;
  font-family: Arial, sans-serif;
  background-color: rgba(255, 255, 255, 0.0);
  min-height: 100vh;
  padding: 40px 20px;
  text-align: center;
}

/* Title Styling - Positioned on top of the image */
.title {
  position: absolute;
  top: 10px; /* Aligns it at the top of the image */
  left: 50%;
  transform: translateX(-50%); /* Centers it horizontally */
  font-family: Arial, sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: white; /* White text for contrast */
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.7); /* Adds a shadow to improve readability */
}


/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

/* Service Card */
.service-card {
  background: white;
  color: black; /* White text for contrast */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

.service-card:hover {
  transform: translateY(-5px);
}

/* Icon */
.icon-container {
  background: transparent;
  padding: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 10px;
}

.service-icon {
  width: 100%;
  height: 100%;
}

/* Service Title */
.service-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Service Description */
.service-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

/* More Button */
.more-button {
  background: none;
  border: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
}

.more-button:hover {
  text-decoration: underline;
}
</style>

