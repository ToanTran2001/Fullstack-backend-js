import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

// configure the app to use EJS as the templating engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//configure the app to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Declare a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello World')
})

// Declare a route handler for the about page
app.get('/about', (req, res) => {
    res.send('This is the about page')
})

// Declare a route handler for the contact page
app.get('/contact', (req, res) => {
    // res.send('<h1>This is the contact page</h1>')
    res.render('sample.ejs');
})

// Start the server on port 3000
app.listen(port,hostname, () => {
    console.log(`Example app listening on port ${port}`)
});