const deleteuserService = require('../services/deleteuser');

const deleteuser = async (req, res) => {
  const { userId } = req.params;
  try {
    const check = /^[0-9]+$/;
    console.log(check.test(userId));
    if (!check.test(userId)) {
      const err = new Error('userId is not number');
      err.status = 400;
      throw err;
    }
    await deleteuserService.deleteuser(userId);
    res.status(201).json({ message: 'User de-identifcation successful' });
  } catch (err) {
    console.log(err);
    res.status(err.status || 500).json(err.message);
  }
};

module.exports = { deleteuser };
