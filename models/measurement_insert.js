const myDataSource = require("./init");

const measuremenRecordInsert = async (weight, user_id) => {
  const id = await myDataSource.query(`INSERT INTO measurement_records (measurement_date, weight, user_id) VALUES (NOW(), ?, ?)`,
  [weight, user_id]);

  return id.insertId;
}

const measuremenDetailRecordInsert = async (record_id, type_id, type_value) => {
  await myDataSource.query(`INSERT INTO measurement_detail_records (record_id, type_id, type_value) VALUES (?, ?, ?)`,
  [record_id, type_id, type_value])
}

const selectTypeName = async (type_id) => {
  return await myDataSource.query(`SELECT type_name, CONCAT(MIN, '~', MAX) AS type_range FROM measurement_types WHERE id = ?`, 
  [type_id]);
}

const rangeCheck = async (type_value, type_id) => {
  return await myDataSource.query(`SELECT IF(? >=MIN && ? <= MAX, 1, 0) AS range_check FROM measurement_types WHERE id = ?`,
  [type_value, type_value, type_id])
}

const setCheck = async (type_ids, type_name) => {
  return await myDataSource.query(`SELECT * FROM measurement_types WHERE id IN (?) AND type_name = ?`,
  [type_ids, type_name])
}

module.exports = { measuremenRecordInsert, measuremenDetailRecordInsert, selectTypeName, rangeCheck, setCheck}