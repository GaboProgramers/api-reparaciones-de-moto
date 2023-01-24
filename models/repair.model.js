// ? se usa para requerir los tipos de dato.
const { DataTypes } = require("sequelize");
// ? requerimiento de la base de datos.
const { db } = require("../database/db");

// ? definicion del modelo siempre empeiza con mayuscula.
const Repair = db.define('repair', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },

    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Repair