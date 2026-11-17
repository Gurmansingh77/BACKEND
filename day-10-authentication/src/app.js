const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const userModel = require("./models/user.model.js");
const authenticate = require("./middleware/auth.middleware.js");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

dotenv.config();
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("hello");
});

app.post("/api/register", async (req, res) => {
  const { email, name, password } = req.body;

  const user = await userModel.create({
    email,
    name,
    password: await bcrypt.hash(password, 10),
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
  res.status(201).json({
    message: "user created successfully",
    data: {
      email,
      name,
      id: user._id,
    },
    token,
  });
});

app.get("/api/me", authenticate, async (req, res) => {
  console.log(req.user);
  res.status(200).json({
    message: "Token decoded successfully",
    data: req.user,
  });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email,
  });

  const isValidPassword = bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(400).json({
      message: "inccorect password",
    });
  }

  const token = jwt.singn(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.status(201).json({
    message:"user loggedIn successfully",
    data:{
        email:user.email,
        name:user.name
    }
  },token 
)
});

module.exports = app;
