const { DataTypes } = require("sequelize");
const { uuid } = require('uuidv4');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },

    img: {
      type: DataTypes.TEXT,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life: {
      type: DataTypes.STRING,
    },
    strength: {
      type: DataTypes.STRING,
    },
    defense: {
      type: DataTypes.STRING,
    },

    speed: {
      type: DataTypes.STRING,
    },

    height: {
      type: DataTypes.STRING,
    },

    weight: {
      type: DataTypes.STRING,
    }
  });
};



