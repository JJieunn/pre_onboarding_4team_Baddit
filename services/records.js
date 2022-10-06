const recordsModels = require('../models/records');
const getUserRecords = async userId => {
  const res = await recordsModels.getUserRecords(userId);

  res[0].measurement_data = JSON.parse(res[0].measurement_data);
  return res;
};
module.exports = { getUserRecords };