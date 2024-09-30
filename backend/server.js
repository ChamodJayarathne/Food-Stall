import "dotenv/config"
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";


//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//DB connection
connectDB();

//api endpoints
app.use("/api/product", productRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
