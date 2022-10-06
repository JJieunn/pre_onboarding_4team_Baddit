const getUsersService = require('../services/users_get')

const getUsers = async (_, res) => {
  try{
    const users = await getUsersService.getUsers();
    res.status(200).json( users )
  } catch (error) {
    console.log(error)
    res.status( error.statusCode ).json({ error: error.message })
  }
}

module.exports = {
  getUsers
}