const recordsModels = require('../models/records_get');

const getRecords = async userId => {
  const res = await recordsModels.getRecords(userId);

  res[0].detail_list = JSON.parse(res[0].detail_list);
  return res;
};

module.exports = { getRecords };
