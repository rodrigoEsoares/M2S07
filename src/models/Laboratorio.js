const { DataTypes } = require("sequelize");
const connection = require("../database/connection");

const Laboratorio = connection.define(
  "laboratorios",
  {
    nome: {
      type: DataTypes.STRING,
    },
    capacidade: {
      type: DataTypes.INTEGER,
    },
  },
 
);

module.exports = Laboratorio;
