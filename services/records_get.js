const recordsModels = require('../models/records_get');

const getRecords = async (userId, recordId) => {
  const res = await recordsModels.getRecords(userId, recordId);

  res[0].detail_list = JSON.parse(res[0].detail_list);
  return res;
};

module.exports = { getRecords };
