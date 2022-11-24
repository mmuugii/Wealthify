const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Income extends Model {}

Income.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        }
    }
)