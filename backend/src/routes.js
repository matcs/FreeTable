const express = require('express');

const userController = require('./controllers/userController');

const routes = express.Router();

routes.get('/', userController.index);

module.exports = routes;