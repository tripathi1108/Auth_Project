Authentication App

Overview

This is a user authentication system built using Node.js, Express, and MongoDB. It includes features such as user registration, login, JWT authentication, input validation, and error handling.

Features

User Registration with password hashing

Secure Login with JWT authentication

Input validation and error handling

Token-based authentication

Environment variable configuration with dotenv

Technologies Used

Node.js

Express.js

MongoDB with Mongoose

JWT (jsonwebtoken)

bcrypt for password hashing

Nodemailer for email handling

dotenv for environment variables

Installation

Clone the repository:

Install dependencies:

Set up environment variables:
Create a .env file and add the following:

Start the server:

API Endpoints

Authentication

POST /api/auth/register - Register a new user

POST /api/auth/login - Login with email and password

Protected Routes (Require JWT Token)

GET /api/user/profile - Get user profile details

PUT /api/user/update - Update user profile
