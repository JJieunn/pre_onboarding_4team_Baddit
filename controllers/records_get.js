const recordServices = require('../services/records_get');

const getRecords = async (req, res) => {
  try {
    const userId = req.params.userId;
    const recordId = req.params.recordId;
    const data = await recordServices.getRecords(userId, recordId);

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { getRecords };
