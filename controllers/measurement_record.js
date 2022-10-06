const measurementRecordService = require("../services/measurement_record")

const measurementInsert = async (req, res) => {
  const { weight, datas, user_id } = req.body;

  try{

    if(!datas[0].type_id) {
      return res.status(400).json({ message: '하나 이상의 측정 데이터 값을 입력하셔야 합니다!' });
    }
   
    const params = { weight, datas, user_id };
    await measurementRecordService.measurementInsert(params);

    return res.status(201).json({ message: 'success' });
  } catch (err) {
    res.status(err.status || 500).json(err.message);
  }
}

const measurementDelete = async (req, res) => {
  const { record_id } = req.params;

  try {
    await measurementRecordService.measurementDelete(record_id);

    return res.status(200).json({ message: 'success' });
  } catch (err) {
    return res.status(err.status || 500).json(err.message);
  }
}

const getRecords = async (req, res) => {
  try {
    const userId = req.params.userId;
    const recordId = req.params.recordId;
    const data = await measurementRecordService.getRecords(userId, recordId);

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getUserRecords = async (req, res) => {
  try {
    const userId = req.params.userId;
    const data = await measurementRecordService.getUserRecords(userId);

    if (!data[0].id) {
      return res.status(400).json({message: "user does not exist."})
    }
    return res.status(200).json(data);
  } catch (err) {
    res.status(err.status || 500).json(err.message);
  }
};

module.exports = {  measurementInsert, measurementDelete, getRecords, getUserRecords }