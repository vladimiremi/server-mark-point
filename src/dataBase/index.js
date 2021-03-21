const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

const Collaborator = require('../models/Collaborator');

const connection = new Sequelize(dbConfig);

connection.authenticate().then(function(){
    console.log('Coneção realizada com sucesso.');
}).catch(function(err){
    console.error('Não foi possível fazer a coneção:', err);
});
   


Collaborator.init(connection);

module.exports = connection;