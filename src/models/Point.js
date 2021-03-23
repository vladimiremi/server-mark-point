const { Model, DataTypes } = require('sequelize');

class Point extends Model {
    static init(sequelize) {
        super.init({
            id_collaborator: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'point',
        })
    }
};

module.exports = Point;