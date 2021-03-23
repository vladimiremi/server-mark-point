const { Model, DataTypes } = require('sequelize');

class Point extends Model {
    static init(sequelize) {
        super.init({
            timestring: DataTypes.STRING,
            latitude: DataTypes.STRING,
            longitude: DataTypes.STRING,
            id_collaborator: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'point',
        })
    }
};

module.exports = Point;