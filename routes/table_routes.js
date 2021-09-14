const router = require("express").Router();

const {
  createProfileTable,
} = require("../controllers/Table/createProfileTable");
const { dropProfileTable } = require("../controllers/Table/dropProfileTable");

router.get("/createProfileTable", createProfileTable);
router.delete("/dropProfileTable", dropProfileTable);

module.exports = router;
