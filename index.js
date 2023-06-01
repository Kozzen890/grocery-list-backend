require("dotenv").config();
// import express from "express";
import dotenv from "dotenv";
import db from "./databases/Database";
import router from "./routes/index";
const cors = require("cors");

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "DELETE", "PUT"],
  optionsSuccessStatus: 200,
};

const express = require("express");
const app = express();
const port = 5000;

try {
  await db.authenticate(app);
  console.log("Database Connected...");
} catch (error) {
  console.error(error);
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.listen(port, () => console.log("Server running at port 5000"));
