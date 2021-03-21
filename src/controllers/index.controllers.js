const crypto = require('crypto');

const Collaborator = require('../models/Collaborator')

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
const postCollaborator = async (request, response) => {
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
        id_admin
    }  = request.body;

    const id = crypto.randomBytes(4).toString('hex');

    const collaborator = await Collaborator.create({ name,
        cpf,
        email,
        phone,
        occupation,
        startexpedient,
        endtexpedient,
        startlunch,
        endlunch,
        id_admin });

    return response.json(collaborator); //colocar api de e-mail
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