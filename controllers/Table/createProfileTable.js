exports.createProfileTable = (req, res) => {
  let sql =
    "CREATE TABLE profiles(id int AUTO_INCREMENT , name VARCHAR(255) NOT NULL , dob date , status ENUM('Active','Paused') DEFAULT 'Active' , PRIMARY KEY (id))";

  db.query(sql, (err, result) => {
    if (err) {
      res.status(406).json({
        message: "error in creating profiles table",
      });
    }
    console.log(result);
    res.status(200).json({
      message: "Profiles table created...",
    });
  });
};
