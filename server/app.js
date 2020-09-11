const express = require("express");
const session = require("express-session");
const db = require("./database/db");
const User = require("./models/user");
const Card = require("./models/card");

const app = express();

const port = 3001;

app.use(express.json());
app.use(
  session({
    secret: "SHJHDJKSHD",
  })
);

app.delete("/user", (req, res) => {
  console.log(req.session);
  req.session.destroy();
  console.log(req.session);
  res.end();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ eMail: email });
  if (!!user) {
    if (user.password === password) {
      req.session.user = user.name;
      res.status(200);
      return res.json({ id: user._id, name: user.name, eMail: user.eMail });
    } else {
      res.status(401);
      res.json({ message: "The password you provided is actually wrong" });
    }
  } else {
    res.status(401);
    res.json({ message: "The email you provided is actually wrong" });
  }
});

app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;
  let userEmail = await User.findOne({ eMail: email });
  let user;
  if (userEmail) {
    res.status(401);
    res.json({ message: "The user with such email already exists" });
  } else {
    try {
      user = await User.create({
        name: name,
        eMail: email,
        password: password,
      });
    } catch (err) {
      res.status(401);
      return res.json(err);
    }
    // Мы не храним пароли в сесии и не передаем на фронт
    req.session.user = user.name;
    res.status(200);
    return res.json({ id: user._id, name: user.name, eMail: user.eMail });
  }
});

app.get("/api", async (req, res) => {
  const cards = await Card.find();
  console.log(cards);
  res.json(cards);
});

app.use((req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.status(401).end();
});

app.listen(port, () => {
  console.log(`The server is listening on ${port}`);
});
