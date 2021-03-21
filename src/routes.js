const { response } = require('express') ;
const express = require('express') ;


const { 
    postCollaborator, 
    getListCollaborator, 
    getInformationsCollaborator,
    postPoint 
} = require('../src/controllers/index.controllers');

const routes = express.Router();

routes.get('/list', getListCollaborator);

routes.post('/register', postCollaborator);

routes.post('/point', postPoint);

routes.get('/collaborator', getInformationsCollaborator);


module.exports = routes;