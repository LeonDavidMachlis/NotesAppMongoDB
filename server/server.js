import express from "express";
import { app } from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

mongoose.connect(process.env.DB).then(console.log("gildb"));

app.listen(process.env.PORT, () => console.log("working"));
