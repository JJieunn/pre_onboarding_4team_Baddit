const recordServices = require('../services/records_user');

const getUserRecords = async (req, res) => {
  try {
    const userId = req.params.userId;
    const data = await recordServices.getUserRecords(userId);
    return res.status(200).json(data);
  } catch (error) {
    next(err);
  }
};
module.exports = { getUserRecords };