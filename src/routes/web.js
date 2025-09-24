import express from 'express'
import { getHomePage, getAboutPage, getContactPage } from '../controllers/homeController.js'; // Import the controller function

const router = express.Router();

// Declare a route handler for the default home page
router.get('/', getHomePage); // Use the controller function

// Declare a route handler for the about page
router.get('/about', getAboutPage); // Use the controller function

// Declare a route handler for the contact page
router.get('/contact', getContactPage); // Use the controller function

// Export the router object
export default router; 