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

module.exports = {
    postAdmin
};