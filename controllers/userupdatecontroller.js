const userService = require("../services/userupdateservice");

const updateInfo = async (req, res) => {
  const { user_name, birth_date, height, phone_number } = req.body;
  const id = req.params.id;

  try {
    if ((id) === undefined) {
      return res.status(400).json({ message: "회원 정보를 입력하세요" })
    }

    await userService.updateInfo(id, user_name, birth_date, height, phone_number)
    res.status(201).json({ message: "회원 정보가 업데이트 되었습니다" })
  }
  catch (err) {
    console.log(err)
    res.status(err.statusCode || 500).json(err.message)
  }
};

module.exports = { updateInfo }