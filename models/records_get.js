const myDataSource = require('./init');

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
module.exports = { getRecords };
