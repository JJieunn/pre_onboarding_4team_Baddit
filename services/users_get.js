const getUsersDao = require('../models/users_get')

const getUsers = async () => {
  return await getUsersDao.getUsers();
}

module.exports = {
  getUsers
}