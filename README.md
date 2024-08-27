# digital-product-management
Digital Product Management System - Node.js API

Features

CRUD Operations: Manage digital products with basic operations.
Express.js: Fast, unopinionated, minimalist web framework for Node.js.
MongoDB: Document-oriented NoSQL database.
Technologies Used

Node.js
Express.js
MongoDB
Mongoose (for MongoDB interaction)
Getting Started

Prerequisites
Node.js installed on your system
MongoDB installed and running
Installation
Clone the repository:
https://github.com/ap299/digital-product-management.git
cd node-product-management-api
Install Node.js dependencies:
npm install

Set up environment variables:
Create a .env file in the root directory and add the following variables:

MONGO_URI=your_mongo_db_connection_string
Run the Node.js server:
npm start

API Endpoints
GET /products: Retrieve a list of all products.
GET /products/{product_id}: Retrieve details of a specific product.
POST /products: Add a new product.
PUT /products/{product_id}: Update details of a specific product.
DELETE /products/{product_id}: Remove a specific product.
Example Requests
Retrieve All Products
curl -X GET http://localhost:3000/products
Add a New Product

curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{
  "name": "New Product",
  "description": "A new digital product",
  "price": 100,
  "availability": true
}'
Error Handling
The API handles common errors like:

404 Not Found: When a product is not found.
400 Bad Request: When input data is invalid.

Future Improvements
Authentication: Implementing JWT-based authentication to secure the endpoints.
Filtering: Adding filtering capabilities to the GET /products endpoint.

