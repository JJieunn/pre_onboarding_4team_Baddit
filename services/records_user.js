const recordsModels = require('../models/records_user');
const getUserRecords = async userId => {
  const res = await recordsModels.getUserRecords(userId);

  res[0].detail_list = JSON.parse(res[0].detail_list);
  return res;
};
module.exports = { getUserRecords };