// ? se usa para requerir los tipos de dato.
const { DataTypes } = require("sequelize");
// ? requerimiento de la base de datos.
const { db } = require("../database/db");

// ? definicion del modelo siempre empeiza con mayuscula.
const User = db.define('user', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user',
        enum: ['user', 'admin']
    },

    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
})

module.exports = User