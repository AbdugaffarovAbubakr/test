// const express = require("express");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();

// app.use(express.json()); // JSON formatidagi ma'lumotlarni qabul qilish uchun
// app.use(express.urlencoded({ extended: true })); // URL-encoded formatdagi ma'lumotlarni qabul qilish uchun

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/about", (req, res) => {
//   res.send("This is the about page");
// });

// app.post("/data", (req, res) => {
//   const data = req.body;
//   res.send(`You sent: ${JSON.stringify(data)}`);
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server has been started on port ${PORT}`);
// });

// import express from "express";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/about", (req, res) => {
//   res.send("This is the about page");
// });

// app.post("/data", (req, res) => {
//   const data = req.body;
//   res.send(`You sent: ${JSON.stringify(data)}`);
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server has been started on port ${PORT}`);
// });

import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

dotenv.config();

const app = express();

// Middleware
app.use(morgan("dev")); // HTTP so'rovlarini log qilish uchun
app.use(cors()); // CORS qo'llab-quvvatlash
// Static files
app.use(express.static("public"));
// Body parser middleware
app.use(express.json()); // JSON formatidagi ma'lumotlarni qabul qilish uchun
app.use(express.urlencoded({ extended: true })); // URL-encoded formatdagi ma'lumotlarni qabul qilish uchun

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
    res.send("This is the about page");
});

app.post("/data", (req, res) => {
    // notog'ri praol bolsa invalid parol deb chiqarsin
    // bu login va html fayllari bilan ishlasin

    const { username, password } = req.body;
    if (username === "admin" && password === "password") {
        res.send("Login successful!");
    } else {
        res.status(401).send("Invalid credentials!");
    }
  const data = req.body;
  res.send(`You sent: ${JSON.stringify(data)}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});
