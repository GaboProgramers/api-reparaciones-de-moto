const Repair = require("./repair.model")
const User = require("./user.model")

const initModel = () => {
    User.hasMany(Repair)
    Repair.hasOne(User)
}

module.exports = initModel