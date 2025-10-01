import express from 'express'
import dotenv from 'dotenv';
import mysql from 'mysql2';
import configViewEngine from './config/viewEngine.js';
import webRoutes from './routes/web.js';

// Load environment variables from .env file
dotenv.config();

//const configViewEngine = require('./config/viewEngine');
const app = express()
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

// Set up the view engine
configViewEngine(app);

// Declare a route handler for the default home page
app.use('/', webRoutes);

// Create a connection to the database
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

//test the database connection
db.query('SELECT * FROM Users', (err, results) => {
    if (err) {
        console.error('Error executing query:', err);
        return;
    }
    console.log('Query results:', results);
});

// Start the server on port 3000
app.listen(port,hostname, () => {
    console.log(`Example app listening on port ${port}`)
});