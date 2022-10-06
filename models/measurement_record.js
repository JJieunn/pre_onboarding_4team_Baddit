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

const measurementDetailDelete = async (record_id) => {
  await myDataSource.query(`DELETE FROM measurement_detail_records WHERE record_id = ?`, [record_id]);
}

const measurementRecordDelete = async (record_id) => {
  await myDataSource.query(`DELETE FROM measurement_records WHERE id = ?`, [record_id]);
}

const getRecords = async (userId, recordId) => {
  return await myDataSource.query(`
  SELECT
  u.id,
  u.user_name,
  mr.measurement_date,
  mr.weight,
  JSON_ARRAYAGG(
  	JSON_OBJECT(
	  'type_id', mdr.type_id,
	  'type_value',mdr.type_value,
	  'type_name',mt.type_name)
	) AS detail_list
  FROM users AS u
  LEFT JOIN measurement_records AS mr ON u.id = mr.user_id
  LEFT JOIN measurement_detail_records AS mdr ON mr.id = mdr.record_id
  LEFT JOIN measurement_types AS mt ON mdr.type_id = mt.id
  WHERE u.id = ${userId} AND mr.id = ${recordId}

  `);
};

const getUserRecords = async userId => {
  return await myDataSource.query(`
  SELECT
  users.id,
  users.user_name,
  JSON_ARRAYAGG(
    JSON_OBJECT(
      'id', measurement_records.id,
      'date', measurement_records.measurement_date,
      'weight', measurement_records.weight)
  ) AS measurement_data
  FROM users
  JOIN measurement_records ON users.id = measurement_records.user_id
  WHERE users.id = ${userId}
  `);
};

module.exports = { 
  measuremenRecordInsert, 
  measuremenDetailRecordInsert, 
  selectTypeName, 
  rangeCheck, 
  setCheck,
  measurementDetailDelete,
  measurementRecordDelete,
  getRecords,
  getUserRecords
 }