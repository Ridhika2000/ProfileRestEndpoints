exports.dropProfileTable = (req, res) => {
  let sql = "DROP TABLE profiles";

  db.query(sql, (err, result) => {
    if (err) {
      res.status(406).json({
        message: "error in deleting profiles table",
      });
    }
    console.log(result);
    res.status(200).json({
      message: "profiles table deleted...",
    });
  });
};
