const { Model, DataTypes } = require('sequelize');

class Collaborator extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            occupation: DataTypes.STRING,
            startexpedient: DataTypes.TIME,
            endtexpedient: DataTypes.TIME,
            startlunch: DataTypes.TIME,
            endlunch: DataTypes.TIME,
            id_admin: DataTypes.INTEGER
        }, {
            sequelize,
            tableName: 'collaborator',
        })
    }
};

module.exports = Collaborator;