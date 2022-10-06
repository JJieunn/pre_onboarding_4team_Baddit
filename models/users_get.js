const myDataSource = require('./init')


const getUsers = async () => {
  return await myDataSource.query (`
  SELECT
    user_name AS name,
    birth_date AS birth,
    height,
    phone_number AS phone,
    DATE_FORMAT(create_at, '%Y-%m-%d %p %h:%i') AS create_at,
    DATE_FORMAT(update_at, '%Y-%m-%d %p %h:%i') AS update_at
  FROM users`)
}


module.exports = {
  getUsers
}