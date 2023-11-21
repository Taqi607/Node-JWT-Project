const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const port = 4000;
const key = "secretkey";

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "some content",
  });
});

app.post("/login", (req, res) => {
  const token = jwt.sign({ name: "taqi", email: "mtaqi607@gmail.com" }, key);
  res.send(token);
});

app.post("/verify", (req, res) => {
  const analyze = jwt.verify(req.body.token, key);
  res.send(analyze);
});

app.listen(4000, () => {
  console.log(`Your application is now running on : ${port} `);
});
