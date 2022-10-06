const userDao = require("../models/userselectdao");

const selectInfo = async (info) => {
  const result = await userDao.selectInfo(info);
  if (result.length > 0) {
    return await userDao.selectInfo(info)
  }
  else {
    const error = new Error("회원 정보가 없습니다")
    error.statusCode = 400
    throw error
  }
}

module.exports = { selectInfo }