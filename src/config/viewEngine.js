import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configViewEngine = (app) => {
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');
    
    //configure the app to serve static files from the "public" directory
    app.use(express.static(path.join('./src', 'public')));
}

export default configViewEngine;