const myDataSource = require('./init')


const getUsers = async (filter) => {
  return await myDataSource.query (`
  SELECT
    id AS userId,
    user_name AS name,
    birth_date AS birth,
    height,
    phone_number AS phone,
    DATE_FORMAT(create_at, '%Y-%m-%d %p %h:%i') AS createAt,
    DATE_FORMAT(update_at, '%Y-%m-%d %p %h:%i') AS updateAt
  FROM users
  WHERE user_name NOT LIKE '${filter}'`)
}


module.exports = {
  getUsers
}