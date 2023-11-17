import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user-routes';
dotenv.config();
const app = express();

//middlewares
app.use(express.json());
app.use("/user", userRouter); 

mongoose
  .connect(
    `mongodb+srv://farhasalam970:${process.env.MONGODB_PASSWORD}@cluster0.8uenibj.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5000 , () =>
      console.log("Connected To Database And Server is running")
    )
  )
  .catch((e) => console.log(e));


