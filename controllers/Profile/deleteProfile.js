exports.deleteProfile = (req, res) => {
  let sql = `delete from profiles where id=${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      res.status(406).json({
        message: "error in deleting profile",
      });
    }
    console.log(result);
    res.status(200).json({
      message: `profile of id ${req.params.id} deleted...`,
    });
  });
};
