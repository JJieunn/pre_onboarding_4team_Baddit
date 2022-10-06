const getUsersDao = require('../models/users_get')

const getUsers = async (filter) => {
  if(filter === 'active') { 
    filter = '%***%'
    const users = await getUsersDao.getUsers(filter);
    return users;
  } else if(!filter) {
    const users = await getUsersDao.getUsers();
    return users;
  }
}

module.exports = {
  getUsers
}