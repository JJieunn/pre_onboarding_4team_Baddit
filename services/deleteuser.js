const deleteuserDao = require('../models/deleteuser');
const existsuserDao = require('../models/existsuser');

const deleteuser = async userId => {
  const existsuser = await existsuserDao.isExistsUser(userId);
  console.log(existsuser[0].success);
  if (existsuser[0].success === '0') {
    const err = new Error('Not Correct UserId');
    err.status = 404;
    throw err;
  } else {
    const userName = await existsuserDao.isDeletedUser(userId);
    if (userName[0].user_name === '***') {
      const err = new Error('Already Deleted User');
      err.status = 400;
      throw err;
    }
  }
  await deleteuserDao.deleteuser(userId);
};

module.exports = { deleteuser };
