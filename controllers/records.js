const recordServices = require('../services/records');

const getUserRecords = async (req, res) => {
  try {
    const userId = req.params.userId;
    const data = await recordServices.getUserRecords(userId);

    if (!data[0].id) {
      return res.status(400).json({message: "user does not exist."})
    }
    return res.status(200).json(data);
  } catch (err) {
    res.status(err.status || 500).json(err.message);
  }
};
module.exports = { getUserRecords };