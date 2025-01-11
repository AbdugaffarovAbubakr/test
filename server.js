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

import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.post("/data", (req, res) => {
  const data = req.body;
  res.send(`You sent: ${JSON.stringify(data)}`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});

