const myDataSource = require('./init');

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

module.exports = { isExistsUser, isDeletedUser };
