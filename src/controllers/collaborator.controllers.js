const crypto = require('crypto');
const { response } = require('express');

const Collaborator = require('../models/Collaborator');

//listar collaboradores
const getListCollaborator = async (request, response) => {
    const idAdmin = request.headers.authorization;
    const colabolarador = await Collaborator.findAll({
        where: {
            id_admin: idAdmin,
            active: true
        }
    });

    console.log(colabolarador);

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
        endlunch
    }  = request.body;

    const id_admin = request.headers.authorization;


    const password = crypto.randomBytes(4).toString('hex');
    const id = crypto.randomBytes(4).toString('hex');

    const collaborator = await Collaborator.create({ 
        id,
        name,
        cpf,
        email,
        password,
        phone,
        occupation,
        startexpedient,
        endtexpedient,
        startlunch,
        endlunch,
        id_admin });

    return response.json(collaborator); //colocar api de e-mail
};

//atualiza o colaborador
const putCollaborator = async (request, response) => {
    const { id } = request.params;
    const idAdmin = request.headers.authorization;
    const {
        name,
        cpf,
        email,
        password,
        phone,
        occupation,
        startexpedient,
        endtexpedient,
        startlunch,
        endlunch,
        active} = request.body;

    //retorno o id do admin
    const collaborator = await Collaborator.findAll({
        where: {
            id: id
        }
    });
    // console.log("collaborator.id_admin:" + collaborator[0].id_admin);
    // console.log("Admin:"+idAdmin);
    // console.log("Collaborator"+id);
    

    // console.log(collaborator);

    // verifica se é o adimistrador que cadastrou que está tentando excluir
    if( collaborator[0].id_admin !== idAdmin) {
        return response.status(401).json({error: 'Operação não permitida.'});
    }

    const collaborator = await Collaborator.update(
        {   name,
            cpf,
            email,
            password,
            phone,
            occupation,
            startexpedient,
            endtexpedient,
            startlunch,
            endlunch,
            active},
        {where: {id: id}}
    )

    
    return response.json(collaborator);
}

// login do Colaborador
const loginCollaborator = async (request, response) => {
    const { password, email } = request.body;

    const collaborator = await Collaborator.findAll({
        where: {
            password: password,
            email: email
        }
    })

    console.log(collaborator);

    if(collaborator == false) {
        return response.status(400).json({error: 'Não existe agricultor com esse ID'});
    }
    return response.json(collaborator);
}

// Listar dados de um único colaborador
const getInformationsCollaborator = async (request, response) => {
    const { id } = request.params;
    const idAdmin = request.headers.authorization;

    const informationCollaborator = await Collaborator.findAll({
        where: {
            id: id,
            id_admin: idAdmin
        }
    });
    

    return response.json(informationCollaborator);
}


module.exports = {
    postCollaborator, 
    getListCollaborator,
    putCollaborator,
    loginCollaborator,
    getInformationsCollaborator
};