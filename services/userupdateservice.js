const userDao = require("../models/userupdatedao");

const updateInfo = async (id, user_name, birth_date, height, phone_number) => {
  return await userDao.updateInfo(id, user_name, birth_date, height, phone_number)
}

module.exports = { updateInfo }