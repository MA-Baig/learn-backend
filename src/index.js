// As we know index.js is the entry point of application and we'll connect to DB here, so for this we need .env file data and for this we've to get this first, so first import dotenv
import dotenv from "dotenv";
import connectToDatabase from "./db/index.js";

dotenv.config({
    path: "./env" // .env file path
});

connectToDatabase();