const measurementDeleteDao = require("../models/measurement_delete");

const measurementDelete = async (record_id) => {
  await measurementDeleteDao.measurementDetailDelete(record_id);
  await measurementDeleteDao.measurementRecordDelete(record_id);
}

module.exports = { measurementDelete }