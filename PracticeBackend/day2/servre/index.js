import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/connectedDB.js";
dotenv.config();

const app = express();

const port = 4500;

app.listen(port, () => {
  console.log("Server is running");
  connectDB();
});
