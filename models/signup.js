const myDataSource = require('./init');

const signup = async (user_name, birth_date, height, phone_number) => {
  await myDataSource.query(
    `
      insert into users (user_name, birth_date, height, phone_number) values (?,?,?,?);
    `,
    [user_name, birth_date, height, phone_number]
  );
};

module.exports = { signup };
