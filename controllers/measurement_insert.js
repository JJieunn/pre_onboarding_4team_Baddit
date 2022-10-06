const measurementService = require("../services/measurement_insert");

const measurementInsert = async (req, res) => {
  const { weight, datas, user_id } = req.body;

  try{

    if(!datas[0].type_id) {
      return res.status(400).json({ message: '하나 이상의 측정 데이터 값을 입력하셔야 합니다!' });
    }
   
    const params = { weight, datas, user_id };
    await measurementService.measurementInsert(params);

    return res.status(201).json({ message: 'success' });
  } catch (err) {
    res.status(err.status || 500).json(err.message);
  }
}

module.exports = { measurementInsert }