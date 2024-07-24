// Create web server with Express
// Create a route to handle GET requests to /comments
// Send back some comments as JSON

const express = require('express');
const commentsRouter = express.Router();

commentsRouter.get('/', (req, res) => {
  res.json(comments);
});

module.exports = commentsRouter;