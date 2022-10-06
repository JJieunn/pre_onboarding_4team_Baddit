const myDataSource = require('./init');

const updateInfo = async (id, user_name, birth_date, height, phone_number) => {
  return await myDataSource.query(`
  UPDATE users 
  SET user_name=?, 
      birth_date = ?,
      height = ? , 
      phone_number = ?
  WHERE id = ?`, [user_name, birth_date, height, phone_number, id])
}

module.exports = { updateInfo }