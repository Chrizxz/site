import express from 'express';
import mongoose from 'mongoose';
import ejs from 'ejs';
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

// Serve frontend files
app.use(express.static('public'));
 
// mongoose.connect(process.env.DB_URI, { dbName: "clt", useNewUrlParser: true, useUnifiedTopology: true, });
// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
// db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

// Start the server
const port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log(`Server started on `.blue + `Port: ${port}`.cyan.underline);
});
