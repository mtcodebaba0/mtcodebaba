import data from '../Indian Loan Database 1k Sample.json';

export default function handler(req, res) {

  const { number } = req.query;

  const info = {
    owner: "@babamtcodee",
    support: "@babamtcodee",
    youtube: "https://youtube.com/@mtcode"
  };

  if (!number) {
    return res.status(200).json({
      status: false,
      message: "Number required",
      ...info
    });
  }

  const result = data.filter(
    item => item.MOB_NUMBER == number
  );

  if (result.length > 0) {
    return res.status(200).json({
      status: true,
      result: result,
      ...info
    });
  }

  return res.status(200).json({
    status: false,
    message: "Data not found",
    ...info
  });
}
