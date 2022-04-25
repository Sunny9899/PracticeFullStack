const express = require("express");
const app = express();
const port = 4000;
const users = require("./users.json");

app.use(express.json());

app.get("/", function (req, res) {
  res.send(users);
});

app.post("/", (req, res) => {
  const updatedUsers = [...users, req.body];
  res.send(updatedUsers);
});

app.patch("/update/:first_name", (req, res) => {
  const newUsers = users.map((user) => {
    if (req.params.first_name === user.first_name) {
      return req.body;
    }
    return user;
  });
  res.send(newUsers);
});

app.delete("/delete/:first_name", (req, res) => {
  const newUsers = users.filter(
    (user) => req.params.first_name !== user.first_name
  );
  res.send(newUsers);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening on port ${port}`);
});
