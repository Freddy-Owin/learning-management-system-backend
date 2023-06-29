const router = require("express-promise-router")();
const controller = require("../../controllers/admin/dashboardController");
router.get("/", controller.all);
module.exports = router;