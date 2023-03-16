const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
const colors = require('colors');


if (process.env.NODE_ENV !== 'production') {
require("dotenv").config();
}

// Serve frontend files
app.use(express.static('public'));
 
// mongoose.connect(process.env.DB_URI, { dbName: "clt", useNewUrlParser: true, useUnifiedTopology: true, });
// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
// db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on `.blue + `Port: ${port}`.cyan.underline);
});
