import express from 'express'
import dotenv from 'dotenv';
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

// Start the server on port 3000
app.listen(port,hostname, () => {
    console.log(`Example app listening on port ${port}`)
});