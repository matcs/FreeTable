const express = require('express');

const userController = require('./controllers/userController');
const restaurantController = require('./controllers/restaurantController');

const routes = express.Router();

routes.get('/restaurants', restaurantController.index);
routes.get('/restaurant/:id', restaurantController.getById);
routes.get('/restaurant/:id/tables', restaurantController.getAvalibleTables);

module.exports = routes;