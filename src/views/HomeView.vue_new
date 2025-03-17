<template>
  <div class="home-display bg-gray-100 min-h-screen p-8">
    <!-- Title -->
    <h2 class="text-3xl font-bold text-center mb-6">Our Services</h2>

    <!-- Hero Image -->
    <div class="relative flex justify-center mb-10">
      <img src="@/assets/hero-image.jpg" alt="Hero Image" class="rounded-lg shadow-lg w-full max-w-4xl" />
    </div>

    <!-- Services Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <div v-for="service in services" :key="service.title" class="service-card p-6 bg-white rounded-lg shadow-lg text-center">
        <!-- Icon -->
        <div class="icon bg-black text-white p-4 rounded-full inline-block mb-4">
          <font-awesome-icon :icon="service.icon" size="2x" />
        </div>
        
        <!-- Title -->
        <h3 class="text-lg font-bold">{{ service.title }}</h3>

        <!-- Description -->
        <p class="text-gray-600 text-sm my-2">{{ service.description }}</p>

        <!-- More Button -->
        <button class="text-black font-bold mt-2">MORE</button>
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
          title: "Mobile Development",
          description: "Sample text. Click to select the text box...",
          icon: "fa-solid fa-code",
        },
        {
          title: "Mobility Services",
          description: "Sample text. Click to select the text box...",
          icon: "fa-solid fa-car",
        },
        {
          title: "Software Consulting",
          description: "Sample text. Click to select the text box...",
          icon: "fa-solid fa-laptop",
        },
      ],
    };
  },
};
</script>

<style scoped>
.service-card:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}
</style>





