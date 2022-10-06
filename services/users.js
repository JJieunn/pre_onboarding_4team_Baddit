const usersDao = require("../models/users");

const signup = async (user_name, birth_date, height, phone_number) => {
  const phonenumberCheck = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
  if (phonenumberCheck.test(phone_number)) {
    phone_number = phone_number.split('-').join('');
  }
  if (
    !(
      phone_number.split('').length === 10 ||
      phone_number.split('').length === 11
    )
  ) {
    const err = new Error(
      'Length of phone_number is must be between 10 and 11'
    );
    err.status = 400;
    throw err;
  }
  await usersDao.signup(user_name, birth_date, height, phone_number);
};

const deleteuser = async userId => {
  const existsuser = await usersDao.isExistsUser(userId);
  console.log(existsuser[0].success);
  if (existsuser[0].success === '0') {
    const err = new Error('Not Correct UserId');
    err.status = 404;
    throw err;
  } else {
    const userName = await usersDao.isDeletedUser(userId);
    if (userName[0].user_name === '***') {
      const err = new Error('Already Deleted User');
      err.status = 400;
      throw err;
    }
  }
  await usersDao.deleteuser(userId);
};

const getUsers = async (filter) => {
  
  if(filter === 'active') { 
    filter = "WHERE user_name NOT LIKE '%***%'"
    const users = await usersDao.getUsers(filter);
    return users;
  } 

  const users = await usersDao.getUsers();
  return users;
}

const selectInfo = async (info) => {
  const result = await usersDao.selectInfo(info);
  if (result.length > 0) {
    return await usersDao.selectInfo(info)
  }
  else {
    const error = new Error("회원 정보가 없습니다")
    error.statusCode = 400
    throw error
  }
}

const updateInfo = async (id, user_name, birth_date, height, phone_number) => {
  return await usersDao.updateInfo(id, user_name, birth_date, height, phone_number)
}

module.exports = { signup, deleteuser, getUsers, selectInfo, updateInfo }