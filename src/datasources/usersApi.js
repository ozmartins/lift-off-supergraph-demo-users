const { users } = require('./usersData');

function getUsers(licensed) {
    return licensed ? users.filter(user => user.hasLicense === licensed):users;
}

function getUser(id) {
    return users.find(user => user.id === id)
}

module.exports = {
    getUsers,
    getUser
}