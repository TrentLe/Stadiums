const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Location model
class MLBFields extends Model {}

MLBFields.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    stadium_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
  },
  team: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'MLBField'
  }
);

module.exports = MLBFields;
