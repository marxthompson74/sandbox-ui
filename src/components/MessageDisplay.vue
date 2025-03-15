<template>
  <div>
    <h1>Spring Boot Message</h1>
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else>{{ message }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "",
      loading: true,
      error: null
    };
  },
  mounted() {
    axios.get("http://localhost:8080/api/message")
      .then(response => {
        this.message = response.data;
        this.loading = false;
      })
      .catch(error => {
        this.error = "Failed to fetch message: " + error;
        this.loading = false;
      });
  }
};
</script>

