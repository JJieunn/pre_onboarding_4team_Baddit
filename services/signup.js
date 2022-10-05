const signupDao = require('../models/signup');

const signup = async (user_name, birth_date, height, phone_number) => {
  await signupDao.signup(user_name, birth_date, height, phone_number);
};

module.exports = { signup };
