const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello from my own Node app");
});

app.get("/users", (req, res) => {
  res.send("Hello from user");
});

app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`);
});
