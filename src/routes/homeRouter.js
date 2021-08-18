const router = require("express").Router();
const { GET } = require("../controller/homeController");

router.route("/").get(GET);

module.exports = router;
