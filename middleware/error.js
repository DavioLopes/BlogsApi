module.exports = (error, req, res, _next) => {
  console.log(error);

  return res.status(500).json('error');
};