const { DataTypes, DATE } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag:{
      type: DataTypes.TEXT,
      allowNull:false,
    },
    region:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    capital:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue:['This country has no capital.'],
    },
    subregion:{
      type: DataTypes.STRING,
      defaultValue:'This country has no subregion.'
    },
    area:{
      type: DataTypes.STRING,
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    timestamps: false
  });
};
