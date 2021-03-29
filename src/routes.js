const express = require('express') ;

const {
    postPoint,
    getListPointCollaborator
} = require('../src/controllers/point.controllers');

const { 
    postCollaborator, 
    getListCollaborator,
    putCollaborator,
    loginCollaborator,
    getInformationsCollaborator,
    getInformationsCollaboratorMobile
} = require('./controllers/collaborator.controllers');

const {postAdmin, loginAdmin} = require('../src/controllers/admin.controllers');

const routes = express.Router();

routes.get('/list-points', getListPointCollaborator);
routes.post('/new-point', postPoint);

routes.post('/register-collaborator', postCollaborator);
routes.post('/session-collaborator', loginCollaborator);
routes.put('/update-collaborator/:id', putCollaborator);
routes.get('/list-collaborator', getListCollaborator);
routes.get('/informations-collaborator/:id', getInformationsCollaborator);
routes.get('/informations-collaborator-mobile', getInformationsCollaboratorMobile);

routes.post('/register-admin', postAdmin);
routes.post('/session-admin', loginAdmin);





module.exports = routes;