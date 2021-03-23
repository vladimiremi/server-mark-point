const Admin = require('../models/Admin');
const crypto = require('crypto');

//cadastrar colabolarador
const postAdmin = async (request, response) => {
    const {
        name,
        email,
        password
    }  = request.body;

    const id = crypto.randomBytes(4).toString('hex');

    const admin = await Admin.create({
        id,
        name,
        email,
        password });

    return response.json(admin);
};


// login do Administrador
const loginAdmin = async (request, response) => {
    const { password, email } = request.body;

    const admin = await Admin.findAll({
        where: {
            password: password,
            email: email
        }
    })

    if(!admin) {
        return response.status(400).json({error: 'Não existe agricultor com esse ID'});
    }
    return response.json(admin);
}

module.exports = {
    postAdmin,
    loginAdmin
};