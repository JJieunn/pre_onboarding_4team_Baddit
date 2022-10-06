const measurementDeleteController = require("../services/measurement_delete");

const measurementDelete = async (req, res) => {
  const { record_id } = req.params;

  try {
    await measurementDeleteController.measurementDelete(record_id);

    return res.status(200).json({ message: 'success' });
  } catch (err) {
    return res.status(err.status || 500).json(err.message);
  }
}

module.exports = { measurementDelete }