const signupServices = require('../services/signup');

const signup = async (req, res) => {
  const { user_name, birth_date, height, phone_number } = req.body;
  if (typeof user_name !== 'string') {
    res.status(400).json({ error: 'user_name is not String' });
  }
  if (typeof birth_date !== 'string') {
    res.status(400).json({ error: 'birth_date is not String' });
  }
  if (typeof height !== 'number') {
    res.status(400).json({ error: 'height is not Number' });
  }
  if (typeof phone_number !== 'string') {
    res.status(400).json({ error: 'phone_number is not String' });
  }
  try {
    await signupServices.signup(user_name, birth_date, height, phone_number);
    res.status(201).json({ message: 'User SignUp Success' });
  } catch (err) {
    console.log(err);
    res.status(err.status || 500).json(err.message);
  }
};

module.exports = { signup };
