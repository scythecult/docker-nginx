import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import { db } from './db.mjs';

const MONGO_DB_URL = 'mongodb://mongo:27017';

const client = new MongoClient(MONGO_DB_URL);

client.connect().then((mongoClient) => {
  console.log('Подключение установлено');
  console.log(mongoClient.options.dbName);
});

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.json(db);
});

app.listen(3001, () => {
  const apiPort = process.env.API_PORT;

  console.log({ apiPort });

  console.log('listening for requests on port 3001');
});
