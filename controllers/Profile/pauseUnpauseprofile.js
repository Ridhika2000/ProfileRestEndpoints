exports.pauseUnpauseprofile = (req, res) => {
  let sql;
  if (req.body.id && req.body.choice) {
    if (req.body.choice === "pause") {
      sql = `UPDATE profiles SET status='Paused' where id='${req.body.id}' AND status='Active'`;
    } else if (req.body.choice === "unpause") {
      sql = `UPDATE profiles SET status='Active' where id='${req.body.id}' AND status='Paused'`;
    } else {
      res.status(406).json({
        message: `error in updating`,
      });
    }
  } else if (req.body.choice) {
    if (req.body.choice === "pause") {
      sql = `UPDATE profiles SET status='Paused' where status='Active'`;
    } else if (req.body.choice === "unpause") {
      sql = `UPDATE profiles SET status='Active' where status='Paused'`;
    } else {
      res.status(406).json({
        message: `error in updating`,
      });
    }
  } else {
    res.status(408).json({
      message: `error in updating.`,
    });
  }

  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json({
      message: "profile updated",
    });
  });
};
