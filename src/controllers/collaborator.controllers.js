const crypto = require('crypto');

const Collaborator = require('../models/Collaborator');
const Point = require('../models/Point');

//listar collaboradores
const getListCollaborator = async (request, response) => {
    const idAdmin = request.headers.authorization;
    const colabolarador = await Collaborator.findAll({
        where: {
            id_admin: idAdmin
        }
    });

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


module.exports = {
    postCollaborator, 
    getListCollaborator, 
};

//atulizar o ponto cadastrado

// const putPoint = async (request, response) => {
//     const { id } = request.params;
//     const idCollaborator = request.headers.authorization;

//     const point = await Point.findAll({
//         where: {
//             id_collaborator: idCollaborator
//         }
//     });

//     if(point.id_collaborator !== idCollaborator) {
//         return response.status(401).json({error: 'Operação não permitida.'});
//     }

//     await Point.update({
//         where: {
//             id: id,
//         }
//     })



// }






//informações do colaborador




