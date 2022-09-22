const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello from my own Node app");
});

const users = [
  { id: 1, name: "Mehedi", email: "mmmehedi53@gmail.com" },
  { id: 2, name: "Rahat", email: "rahat@gmail.com" },
  { id: 3, name: "Hasan", email: "rahat@gmail.com" },
  { id: 4, name: "Sorna", email: "sorna@gmail.com" },
  { id: 5, name: "Marjana", email: "marjana@gmail.com" },
  { id: 6, name: "Jahan", email: "marjana@gmail.com" },
  { id: 7, name: "Marjana", email: "marjana@gmail.com" },
  { id: 8, name: "Jhuma", email: "marjana@gmail.com" },
  { id: 9, name: "Keya", email: "marjana@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(users);
});

app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`);
});
