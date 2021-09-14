exports.getProfilesByStatus = (req, res) => {
  let sql;
  if (req.query.status === "Active") {
    sql = "select * from profiles where status='Active'";
  } else if (req.query.status === "Paused") {
    sql = "select * from profiles where status='Paused'";
  } else {
    sql = "select * from profiles";
  }

  let query = db.query(sql, (err, result) => {
    if (err) {
      res.status(406).json({
        message: "error in fetching profiles",
      });
    }

    res.status(200).json({
      profiles: result,
    });
  });
};
