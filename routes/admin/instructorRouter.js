const router = require("express-promise-router")();
const controller = require("../../controllers/admin/instructorController");

router.get("/", controller.all);
module.exports = router;