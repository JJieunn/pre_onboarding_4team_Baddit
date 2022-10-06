const getUsersDao = require('../models/users_get')

const getUsers = async (filter) => {
  
  if(filter === 'active') { 
    filter = "WHERE user_name NOT LIKE '%***%'"
    const users = await getUsersDao.getUsers(filter);
    return users;
  } 

  const users = await getUsersDao.getUsers();
  return users;
}

module.exports = {
  getUsers
}