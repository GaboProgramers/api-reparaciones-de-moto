const { DataTypes } = require("sequelize")
const { db } = require("../database/db")

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
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'client',
        enum: ['client', 'employee']
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'available',
        enum: ['avaliable', 'disable']
    }
});

module.exports = User;
