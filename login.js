const axios = require("axios");

const count = 1000;

(async () => {
  for (let i = 0; i < count; i++) {
    await axios.post("http://localhost:3000/login", {
      username: "foo",
      password: "bar",
    });
  }
})();
