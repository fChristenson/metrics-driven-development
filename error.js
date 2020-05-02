const axios = require("axios");

const count = 1000;

(async () => {
  for (let i = 0; i < count; i++) {
    try {
      await axios.get("http://localhost:3000/error");
    } catch (e) {}
  }
})();
