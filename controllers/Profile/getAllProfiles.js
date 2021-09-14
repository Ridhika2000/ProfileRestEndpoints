exports.getAllProfiles = (req, res) => {
  let sql = "select * from profiles";
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
};
