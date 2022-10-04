/* const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123qwe',
  database : 'Baddit'
});

connection.connect();
 */
const myDataSource = require('./index')


const getUsers = async () => {
  const res = await myDataSource.query(
  `SELECT
  user_name AS name,
  birth_date,
  height,
  phone_number,
  DATE_FORMAT(create_at, '%Y-%m-%d %p %h:%i') AS create_at,
  DATE_FORMAT(update_at, '%Y-%m-%d %p %h:%i') AS update_at
  FROM users`)

  console.log("res : ", res)
  return res;
}


module.exports = {
  getUsers
}