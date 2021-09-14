exports.createDatabase = async (req, res) => {
  console.log("hey");
  let sql = "CREATE DATABASE profileData";
  db.query(sql, (err, result) => {
    if (err) {
      res.status(406).json({
        message: "error in creating database",
      });
    }
    console.log(result);
    res.status(200).json({
      message: "database created...",
    });
  });
};
