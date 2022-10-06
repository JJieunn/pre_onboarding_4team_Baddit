const measurementRecordDao = require("../models/measurement_record");

const throwErrMsg = (msg) => {
  const error = new Error({ message: msg}.message);
  error.statusCode = 400;
  throw error;
}

// 측정 기록 입력
const measurementInsert = async (params) => {
  let measurement_data = params.datas;

  let type_ids = [];

  measurement_data.forEach((value, index, array) => {
    type_ids.push(value.type_id)
  });

  const record_id = await measurementRecordDao.measuremenRecordInsert(params.weight, params.user_id);

  // 중복 체크
  for(let i=1; i<measurement_data.length; i++){
    if(measurement_data[0].type_id == measurement_data[i].type_id)
      throwErrMsg("측정 데이터 종류는 중복될 수 없습니다.")
  }

  for(let i=0; i<measurement_data.length; i++) {
    let type_id = measurement_data[i].type_id;
    let type_value = measurement_data[i].type_value;
    
    let measurement_type = await measurementRecordDao.selectTypeName(type_id);
    let type_name = measurement_type[0].type_name;
    let type_range = measurement_type[0].type_range;

    if(measurement_type.length == 0) {
      throwErrMsg("존재하지 않는 데이터 종류 입니다.");
    }
    
    // 어깨 굴곡 & 어깨 신전 체크
    if(type_name == "어깨 굴곡") {
      let result = await measurementRecordDao.setCheck(type_ids, "어깨 신전");
      if(result.length == 0) 
        throwErrMsg("어깨 굴곡은 어깨 신전과 같이 작성되어야 합니다.");
    }

    if(type_name == "어깨 신전") {
      let result = await measurementRecordDao.setCheck(type_ids, "어깨 굴곡");
      if(result.length == 0) 
        throwErrMsg("어깨 신전은 어깨 굴곡과 같이 작성되어야 합니다.");
    }

    // 정수 체크
    if(isNaN(type_value)) 
      throwErrMsg("측정 값은 정수로 입력되어야 합니다.");

    // 범위 초과 체크
    let rangeCheck = await measurementRecordDao.rangeCheck(type_value, type_id)
    if(rangeCheck[0].range_check == 0) 
      throwErrMsg(type_name + "의 범위는 " + type_range + "을 초과할 수 없습니다.");

    
    await measurementRecordDao.measuremenDetailRecordInsert(record_id, type_id, type_value);
  }

}

const measurementDelete = async (record_id) => {
  await measurementRecordDao.measurementDetailDelete(record_id);
  await measurementRecordDao.measurementRecordDelete(record_id);
}

const getRecords = async (userId, recordId) => {
  const res = await measurementRecordDao.getRecords(userId, recordId);

  res[0].detail_list = JSON.parse(res[0].detail_list);
  return res;
};

const getUserRecords = async userId => {
  const res = await measurementRecordDao.getUserRecords(userId);

  res[0].measurement_data = JSON.parse(res[0].measurement_data);
  return res;
};

module.exports = { measurementInsert, measurementDelete, getRecords, getUserRecords }