require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./connection');
const patientRouter = require('./routes/patientRoute');

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB(process.env.MONGO_URL)
  .then(() => console.log('DB CONNCETED'))
  .catch((err) => console.error(`${err}, DB NOT CONNECTED`));

app.use('/patient', patientRouter);

app.listen(PORT, () => console.log(`SERVER IS RUNNING PORT ${PORT}`));
