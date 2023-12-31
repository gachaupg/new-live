import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import userContentsRouter from "./routes/Products.js";
import cors from "cors";

import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log('Server is connected');

  })
  .catch((error) => console.log(`${error} did not connect`));

const __dirname = path.resolve();

const app = express();
app.use(cors());


app.use(express.json());

app.use(cookieParser());

app.get(('/'), (req,res) => {
res.send('hello')});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', userContentsRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
