const userService = require("../services/userselectservice");

const selectInfo = async (req, res) => {
  const info = req.query.info;

  try {
    if ((info) === undefined) {
      return res.status(400).json({ message: "회원 정보를 입력하세요" })
    }

    const result = await userService.selectInfo(info)
    res.status(201).json({ result })
  }
  catch (err) {
    console.log(err)
    res.status(err.statusCode || 500).json(err.message)
  }
};

module.exports = { selectInfo }