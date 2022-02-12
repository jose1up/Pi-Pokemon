const { DataTypes } = require("sequelize");
const { uuid } = require('uuidv4');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("type", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
