const signupServices = require('../services/signup');

const signup = async (req, res) => {
  const { user_name, birth_date, height, phone_number } = req.body;
  try {
    await signupServices.signup(user_name, birth_date, height, phone_number);
    res.status(201).json({ message: 'User SignUp Success' });
  } catch (err) {
    console.log(err);
    res.status(err.status || 500).json(err.message);
  }
};

module.exports = { signup };
