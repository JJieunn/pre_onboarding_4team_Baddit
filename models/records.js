const myDataSource = require('./init');

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
  module.exports = { getUserRecords };