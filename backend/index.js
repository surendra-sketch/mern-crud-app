import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import router from "./routes/userRoutes.js";
import Dbconnection from "./config/DBconnection.js";
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

Dbconnection();
app.use("/api", router);

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
