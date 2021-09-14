exports.createNewProfile = (req, res) => {
  const name = req.body.name;
  const dob = req.body.dob;
  let status = req.body.status;
  if (status === undefined) {
    status = "Active";
  }

  if (name && dob) {
    let sql = `INSERT INTO profiles(name,dob,status) VALUES ("${name}","${dob}","${status}")`;
    let query = db.query(sql, (err, result) => {
      if (err) throw err;
      res.json({
        message: "record added to profiles",
      });
    });
  } else {
    res.status(408).json({
      message: "unable to create profile.Enter the details again",
    });
  }
};
