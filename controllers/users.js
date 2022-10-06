const usersService = require("../services/users");

// 회원가입
const signup = async (req, res) => {
  const { user_name, birth_date, height, phone_number } = req.body;

  try {
    const hasKey = {
      user_name: false,
      birth_date: false,
      height: false,
      phone_number: false,
    };

    /** 받아온 데이터에 키 + 벨류 값이 존재하는지 확인하는 코드 */
    const requireKey = Object.keys(hasKey);

    Object.entries(req.body).forEach(([key, value]) => {
      if (requireKey.includes(key) && value) {
        hasKey[key] = true;
      }
    });

    /** 받아온 데이터에 키 + 벨류 값이 없을때 에러를 표시해주는 코드 */
    const hasKeyArray = Object.entries(hasKey);
    for (let i = 0; i < hasKeyArray.length; i++) {
      const [key, value] = hasKeyArray[i];
      if (!value) {
        const err = new Error(`${key} must be entered`);
        err.status = 400;
        throw err;
      }
    }

    /** 받아온 데이터의 타입을 확인해서 틀렸으면 에러를 표시해주는 코드 */
    Object.entries(req.body).forEach(([key, value]) => {
      if (key === 'height') {
        if (typeof value !== 'number') {
          const err = new Error(`${key} must be a number`);
          err.status = 400;
          throw err;
        }
      } else {
        if (typeof value !== 'string') {
          const err = new Error(`${key} must be a string`);
          err.status = 400;
          throw err;
        }
      }
    });

    await usersService.signup(user_name, birth_date, height, phone_number);
    res.status(201).json({ message: 'User SignUp Success' });
  } catch (err) {
    console.log(err);
    res.status(err.status || 500).json(err.message);
  }
};

// 유저 정보 삭제
const deleteuser = async (req, res) => {
  const { userId } = req.params;
  try {
    const check = /^[0-9]+$/;
    console.log(check.test(userId));
    if (!check.test(userId)) {
      const err = new Error('userId is not number');
      err.status = 400;
      throw err;
    }
    await usersService.deleteuser(userId);
    res.status(201).json({ message: 'User de-identifcation successful' });
  } catch (err) {
    console.log(err);
    res.status(err.status || 500).json(err.message);
  }
};

// 회원 목록
const getUsers = async (req, res) => {
  const { filter } = req.query
  
  if(!(filter === undefined || filter === 'active'))
  {
    res.status(400).json({ error: "회원 목록을 불러오는데 실패했습니다." })
  }

  try{
    const users = await usersService.getUsers(filter);
    res.status(200).json( users )
  } catch (error) {
    console.log(error)
    res.status( error.statusCode ).json({ error: error.message })
  }
}

// 사용자 정보 가져오기
const selectInfo = async (req, res) => {
  const info = req.query.info;

  try {
    if ((info) === undefined) {
      return res.status(400).json({ message: "회원 정보를 입력하세요" })
    }

    const result = await usersService.selectInfo(info)
    res.status(201).json({ result })
  }
  catch (err) {
    console.log(err)
    res.status(err.statusCode || 500).json(err.message)
  }
};

// 사용자 정보 수정
const updateInfo = async (req, res) => {
  const { user_name, birth_date, height, phone_number } = req.body;
  const id = req.params.id;

  try {
    if ((id) === undefined) {
      return res.status(400).json({ message: "회원 정보를 입력하세요" })
    }

    await usersService.updateInfo(id, user_name, birth_date, height, phone_number)
    res.status(201).json({ message: "회원 정보가 업데이트 되었습니다" })
  }
  catch (err) {
    console.log(err)
    res.status(err.statusCode || 500).json(err.message)
  }
};

module.exports = { signup, deleteuser, getUsers, selectInfo, updateInfo }
