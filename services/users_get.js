const usersGetDao = require('../models/users_get')

const getUsers = async () => {
  return await usersGetDao.getUsers();

  /*  if(!users) {
    const error = new Error("DONT_GET_USERS")
    error.statusCode = 400
    throw error;
  } */
}

module.exports = {
  getUsers
}