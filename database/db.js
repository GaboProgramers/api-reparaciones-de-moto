const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost', //direccion donde se encuentra la base de datos
    username: process.env.DB_USERNAME, //usuario por defecto postgre
    password: process.env.DB_PASSWORD, //contraseña que se digita en postgre
    database: process.env.DB_NAME_DB, //nombre de la base de datos
    logging: true // es para ver en consola las consultas relacionadas.
})


module.exports = { db };