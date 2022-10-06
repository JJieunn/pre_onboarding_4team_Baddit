const getUsersService = require('../services/users_get')

const getUsers = async (req, res) => {
  const { filter } = req.query
  
  if(!(filter === undefined || filter === 'active'))
  {
    res.status(400).json({ error: "회원 목록을 불러오는데 실패했습니다." })
  }

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
