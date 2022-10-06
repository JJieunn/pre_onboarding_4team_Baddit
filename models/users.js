const myDataSource = require("./init");

const signup = async (user_name, birth_date, height, phone_number) => {
  await myDataSource.query(
    `
      insert into users (user_name, birth_date, height, phone_number) values (?,?,?,?);
    `,
    [user_name, birth_date, height, phone_number]
  );
};

const deleteuser = async userId => {
  await myDataSource.query(
    `
      update users set user_name = "***", birth_date = "********", phone_number = "***-****-****" where id = ?
    `,
    [userId]
  );
};

const isExistsUser = async userId => {
  const existsuser = await myDataSource.query(
    `
      SELECT EXISTS (SELECT * FROM users WHERE id = ?) AS success
    `,
    [userId]
  );
  return existsuser;
};

const isDeletedUser = async userId => {
  const userName = await myDataSource.query(
    `
      SELECT user_name FROM users WHERE id = ?;
    `,
    [userId]
  );
  return userName;
};


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
  ${filter}`)
}

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

const updateInfo = async (id, user_name, birth_date, height, phone_number) => {
  return await myDataSource.query(`
  UPDATE users 
  SET user_name=?, 
      birth_date = ?,
      height = ? , 
      phone_number = ?
  WHERE id = ?`, [user_name, birth_date, height, phone_number, id])
}

module.exports = { signup, deleteuser, getUsers, selectInfo, updateInfo, isExistsUser, isDeletedUser }