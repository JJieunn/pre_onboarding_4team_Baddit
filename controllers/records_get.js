const recordServices = require('../services/records_get');

const getRecords = async (req, res) => {
  try {
    const userId = req.params.userId;
    const data = await recordServices.getRecords(userId);

    return res.status(200).json(data);
  } catch (error) {
    next(err);
  }
};

module.exports = { getRecords };
