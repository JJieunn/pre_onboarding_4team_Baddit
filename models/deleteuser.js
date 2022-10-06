const myDataSource = require('./init');

const deleteuser = async userId => {
  await myDataSource.query(
    `
      update users set user_name = "***", birth_date = "********", phone_number = "***-****-****" where id = ?
    `,
    [userId]
  );
};

module.exports = { deleteuser };
