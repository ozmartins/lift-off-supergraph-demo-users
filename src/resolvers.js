const userAPI = require('./datasources/users');

const resolvers = {
  Query: {
    users: (_, { licensed = false }) => userAPI.getUsers(licensed),
    user: (_, { id }) => userAPI.getUser(id)
  }
};

module.exports = resolvers;
