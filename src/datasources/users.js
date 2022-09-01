const { users } = require('./data');

function getUsers(licensed) {
    console.log(licensed)
    return licensed ? users.filter(user => user.hasLicense === licensed):users;
}

function getUser(id) {
    return users.find(user => user.id === id)
}

module.exports = {
    getUsers,
    getUser
}