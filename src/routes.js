
const express = require('express') ;

const { 
    postCollaborator, 
    getListCollaborator, 
} = require('./controllers/collaborator.controllers');



const routes = express.Router();

routes.get('/list-collaborator', getListCollaborator);



routes.post('/register-collaborator', postCollaborator);




module.exports = routes;