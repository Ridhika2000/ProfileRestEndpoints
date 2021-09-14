const router = require("express").Router();

const { createDatabase } = require("../controllers/Database/createDatabase");
const { dropDatabase } = require("../controllers/Database/dropDatabase");

router.get("/createDatabase", createDatabase);
router.delete("/dropDatabase", dropDatabase);

module.exports = router;
