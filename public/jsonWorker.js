// public/jsonWorker.js
self.onmessage = function (e) {
  try {
    const parsedData = JSON.parse(e.data);
    self.postMessage({ data: parsedData });
  } catch (error) {
    self.postMessage({ error: error.message });
  }
};

