// Create web server
// Create a route for /comments
// Return all the comments
// Create a route for /comments/:id
// Return the comment with the id specified in the route
// Create a route for /comments/new
// Create a new comment
// Create a route for /comments/edit/:id
// Update the comment with the id specified in the route
// Create a route for /comments/delete/:id
// Delete the comment with the id specified in the route

// Import express and create a web server
const express = require('express');
const app = express();

// Import the comments data
const comments = require('./comments.json');

// Create a route for /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route for /comments/