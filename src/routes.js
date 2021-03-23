const express = require('express') ;

const {
    postPoint,
    getListPointCollaborator
} = require('../src/controllers/point.controllers');

const { 
    postCollaborator, 
    getListCollaborator, 
} = require('./controllers/collaborator.controllers');

const {postAdmin} = require('../src/controllers/admin.controllers');

const routes = express.Router();

routes.get('/list-collaborator', getListCollaborator);

routes.get('/list-points', getListPointCollaborator);

routes.post('/register-collaborator', postCollaborator);

routes.post('/register-admin', postAdmin);

routes.post('/new-point', postPoint);



module.exports = routes;