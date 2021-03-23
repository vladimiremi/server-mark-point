const Point = require('../models/Point');
const moment = require('moment');
const Sequelize = require('sequelize');



/**registrar ponto**/
const postPoint = async ( request, response ) => {

    const {latitude, longitude} = request.body;
    const id_collaborator = request.headers.authorization;
    const timestring = moment().format('YYYY-MM-DD[T]HH:mm:ss');
    
    const Op = Sequelize.Op;              // biblioteca de operadores
    const query = `${timestring.slice(0, 10)}%`; // string de consulta
    console.log(query)

    //busca pontos de um mesmo dia
    const daypoints = await Point.findAll({ 
        where: { 
            timestring: { [Op.like]: query },
            id_collaborator: id_collaborator
        } 
    });
    
    //só permite cadastrar 4 pontos em um dia.
    if (daypoints < 4) {
        //cria o ponto
        const point = await Point.create({ 
            id_collaborator, 
            latitude, longitude, 
            timestring
        });

         // retorna o ponto que foi criado
        const seePoint = await Point.findAll({
            where: {
                id: point.id
            }
        });

        return response.json(seePoint);
    } else {
        response.json("Já foram cadastrado 4 pontos, no dia de hoje.");
    }


    
       

   

    // console.log(point);
    console.log(daypoints.length)

}

//listar os pontos do colaborador
const getListPointCollaborator = async (request, response) => {
    const IdCollaborator = request.headers.authorization;
    const points = await Point.findAll({
        where: {
            id_collaborator: IdCollaborator
        }
    });

    return response.json(points);
};

module.exports = {
    postPoint,
    getListPointCollaborator
}