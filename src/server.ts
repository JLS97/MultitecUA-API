import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import mongoose from 'mongoose';
import http from 'http';
import routes from "./presentation/routes/index";
import { registerApplicationNotifications } from "./presentation/notifications/registerApplicationNotifications";

const PORT = process.env.PORT ?? 8080; 

const MONGO_URL = process.env.MONGO_URL ?? 'mongodb+srv://admin:admin@cluster0.lenymow.mongodb.net/?retryWrites=true&w=majority';

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

app.use('/api', routes);

app.get('/', (_req, res) => {
  res.status(200).send('Hello World!');
});

const server = http.createServer(app);

const startServer = async() => {
  try {
    await mongoose.connect(MONGO_URL);
    registerApplicationNotifications();
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
}

startServer();