const crypto = require('crypto');
const { response } = require('express');
const sequelize = require('../config/dataBase/index');

//listar collaboradores
const getListCollaborator = (request, response) => {
    const colabolarador = [
        {
        name: "Vladimir"
        },
        {
        name: "Samira"
        }
    ];

    return response.json(colabolarador);
};

//cadastrar colabolarador
const postCollaborator = (request, response) => {
    const {
        name,
        cpf,
        email,
        phone,
        occupation,
        startexpedient,
        endtexpedient,
        startlunch,
        endlunch,
    }  = request.body;

    console.log(name);

    const id = crypto.randomBytes(4).toString('hex');

    return response.json({ id }); //colocar api de e-mail
};

//registrar ponto
const postPoint = ( request, response ) => {
    const {      
        startexpedient,
        endtexpedient,
        startlunch,
        endlunch,} = request.body;

        return response.json("Deu certo!")
}

//informações do colaborador
const getInformationsCollaborator = ( request, response ) => {
    const informaçõesCollaborator = {
        name: "Vladimir Costa",
        dateRegister: "28/12/2020",
        CPF: "07124043336",
        email: "vladimiremi2014@gmail.com",
        occupation: "programador na Hybriun",
        startexpedient: "7:00",
        endtexpedient: "17:00",
        startlunch: "12:00",
        endlunch: "13:00"
    }

    return response.json({informaçõesCollaborator})

}

module.exports = {
    postCollaborator, 
    getListCollaborator, 
    getInformationsCollaborator,
    postPoint
};