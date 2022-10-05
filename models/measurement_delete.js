const myDataSource = require("./init");

const measurementDetailDelete = async (record_id) => {
  await myDataSource.query(`DELETE FROM measurement_detail_records WHERE record_id = ?`, [record_id]);
}

const measurementRecordDelete = async (record_id) => {
  await myDataSource.query(`DELETE FROM measurement_records WHERE id = ?`, [record_id]);
}

module.exports = { measurementDetailDelete, measurementRecordDelete}