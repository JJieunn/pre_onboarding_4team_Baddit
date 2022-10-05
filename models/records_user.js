const myDataSource = require('./init');

const getUserRecords = async userId => {
    return await myDataSource.query(
    );
  };
  module.exports = { getUserRecords };