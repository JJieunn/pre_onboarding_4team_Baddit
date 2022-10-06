const getUsersService = require('../services/users_get')

const getUsers = async (req, res) => {
  const {filter} = req.query
  try{
    const users = await getUsersService.getUsers(filter);
    res.status(200).json( users )
  } catch (error) {
    console.log(error)
    res.status( error.statusCode ).json({ error: error.message })
  }
}

module.exports = {
  getUsers
}