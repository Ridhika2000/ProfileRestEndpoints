const router = require("express").Router();

const { createNewProfile } = require("../controllers/Profile/createNewProfile");
const { deleteProfile } = require("../controllers/Profile/deleteProfile");
const { getAllProfiles } = require("../controllers/Profile/getAllProfiles");
const {
  getProfilesByStatus,
} = require("../controllers/Profile/getProfilesByStatus");

const {
  pauseUnpauseprofile,
} = require("../controllers/Profile/pauseUnpauseprofile");

router.post("/createNewProfile", createNewProfile);
router.delete("/deleteProfile/:id", deleteProfile);
router.get("/getAllProfiles", getAllProfiles);
router.get("/getProfilesByStatus", getProfilesByStatus);
router.put("/pauseUnpauseprofile", pauseUnpauseprofile);

module.exports = router;
