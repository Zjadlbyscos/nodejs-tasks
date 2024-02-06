# Contacts Management Application

This is a simple contacts management application with email verification built using Node.js, Express, and MongoDB.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

1. Clone the repository:
2. Install dependencies:
(   cd nodejs-tasks,
    npm install ):

3. Create a .env file in the root directory with the following content:
    PORT=3000
    DB_URL=your_mongodb_connection_string
    API_KEY_SENDGRID=your_sendgrid_api_key
    
4. Start the application:
    npm run start:dev

## Features
* User authentication and authorization
* Email verification using SendGrid
* CRUD operations for managing contacts

## Project Structure
* config/passport.js: Passport configuration for authentication
* helpers/multer.js: Helper function for creating folders if not exist
* routes/api/auth.routes.js: Authentication routes
* routes/api/contacts.routes.js: Contacts management routes
* controllers/auth.controller.js: Authentication controllers
* controllers/multer.controller.js: Controller for handling avatar uploads
* middlewares/auth.js: Authentication middleware
* middlewares/avatarValidateUpload.js: Middleware for validating avatar uploads
* controllers/contacts.controller.js: Controller for handling contacts CRUD operations
* controllers/email.controller.js: Controller for handling email verification


Remember to replace placeholders like `your-username`, `your_mongodb_connection_string`, and `your_sendgrid_api_key` with your actual details. Additionally, you might want to enhance and tailor the documentation based on specific features or configurations in your application.
