// Packages:
import express from "express";
import bookRoutes from "./Routes/BookRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./Util/db.js";
dotenv.config();

const app = express();

// Middleware for parsing request body
app.use(express.json());

//Cors:
app.use(cors());

// Default Route
app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome to the Book Store!");
});

app.use("/books", bookRoutes);

// Mongoose Connection:
app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT : ${process.env.PORT}`);
  ConnectDB();
});
