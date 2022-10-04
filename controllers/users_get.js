const usersGetService = require('../services/users_get')

const getUsers = async (req, res) => {
  try{
    const users = await usersGetService.getUsers();
    console.log(users)
    res.status(200).json({ users })
  } catch (error) {
    console.log(error)
    res.status( error.statusCode ).json({ error: error.message })
  }
}

module.exports = {
  getUsers
}