const Point = require('../models/Point');

/**registrar ponto**/
const postPoint = async ( request, response ) => {

    const id_collaborator = request.headers.authorization;

    const point = await Point.create({ id_collaborator });

    return response.json(point);
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