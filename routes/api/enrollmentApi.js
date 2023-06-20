const router = require("express-promise-router")();
const controller = require("../../controllers/api/enrollment")
router.post("/", controller.add);

module.exports = router;