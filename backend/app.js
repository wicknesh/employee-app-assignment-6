import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import userRouter from './routers/userRouter.js';

const app = express();

//MongoDB connection
async function main () {
    await mongoose.connect(process.env.mongodb_url);
}

main()
    .then(console.log("Connected to DB"))
    .catch(error => console.log(error));

app.use(express.json());
app.use(cors());

//Routes setup
app.use('/users', userRouter);

const port = process.env.port || 3000;

app.listen((port), () => {
    console.log(`Server started and listening to port ${port}`);
})