const express = require('express') ;

const {
    postPoint,
    getListPointCollaborator
} = require('../src/controllers/point.controllers');

const { 
    postCollaborator, 
    getListCollaborator,
    putCollaborator
} = require('./controllers/collaborator.controllers');

const {postAdmin, loginAdmin} = require('../src/controllers/admin.controllers');

const routes = express.Router();

routes.get('/list-collaborator', getListCollaborator);

routes.put('/list-collaborator/:id', putCollaborator);

routes.get('/list-points', getListPointCollaborator);

routes.post('/register-collaborator', postCollaborator);

routes.post('/register-admin', postAdmin);

routes.post('/session-admin', loginAdmin);

routes.post('/new-point', postPoint);



module.exports = routes;