<template>
  <div>
    <h1>WebSocket Chat</h1>
    <input v-model="message" placeholder="Type a message..." />
    <button @click="sendMessage">Send</button>
    <p v-if="serverMessage">Server says: {{ serverMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ws: null,
      message: "",
      serverMessage: ""
    };
  },
  mounted() {
    this.ws = new WebSocket("ws://localhost:8080/ws");

    this.ws.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    this.ws.onmessage = (event) => {
      console.log("Message from server:", event.data);
      this.serverMessage = event.data;
    };

    this.ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    this.ws.onclose = () => {
      console.log("WebSocket connection closed");
    };
  },
  methods: {
    sendMessage() {
      if (this.ws && this.message) {
        this.ws.send(this.message);
        this.message = "";
      }
    }
  }
};
</script>

