const myDataSource = require('./init');

const selectInfo = async (info) => {
  return await myDataSource.query(`
  SELECT
  users.id,
  users.user_name,
  users.phone_number,
  users.height,
  DATE_FORMAT(users.birth_date, '%Y-%m-%d') as birth
  FROM users
  WHERE users.id = ? or  users.user_name=? or users.phone_number=?`,
    [info, info, info])
}

module.exports = { selectInfo }