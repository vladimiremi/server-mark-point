const { Model, DataTypes } = require('sequelize');

class Admin extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'admin',
        })
    }
};

module.exports = Admin;