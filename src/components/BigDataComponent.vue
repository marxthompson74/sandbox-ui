<template>
  <div>
    <h1>Random Users ({{ users.length }})</h1>
    <p v-if="loading">Loading...</p>
    <ul v-else>
      <li v-for="(user, index) in users.slice(0, 5000)" :key="index">
        {{ user.name.first }} {{ user.name.last }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      loading: true,
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      const worker = new Worker('/jsonWorker.js');

      worker.onmessage = (e) => {
        if (e.data.error) {
          console.error('Error from worker:', e.data.error);
        } else {
          this.users = e.data.data.results;
        }
        this.loading = false;
      };

      axios
        .get('https://randomuser.me/api/?results=5000', {
          responseType: 'text', // raw string, so we can parse in the worker
        })
        .then((response) => {
          worker.postMessage(response.data);
        });
    },
  },
};
</script>

