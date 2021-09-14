exports.dropDatabase = async (req, res) => {
  let sql = "DROP DATABASE profileData";
  db.query(sql, (err, result) => {
    if (err) {
      res.status(406).json({
        message: "error in deleting database",
      });
    }
    console.log(result);
    res.status(200).json({
      message: "database deleted...",
    });
  });
};
