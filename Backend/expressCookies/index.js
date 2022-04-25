const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;

app.use(cookieParser());

function validate(req, res, next) {
  const cookieName = req.cookies.name;
  //console.log(cookieName);
  if (cookieName === "ExpressCookie") {
    console.log("Valid Cookie Exists");
  } else {
    console.log("Valid Cookie doesn't exist");
  }
  next();
}

app.get("/", validate, (req, res) => {
  res.cookie("name", "ExpressCookie");
  let message = "Cookies Received Successfully";
  res.status(200).send(message);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening on port ${port}`);
});
