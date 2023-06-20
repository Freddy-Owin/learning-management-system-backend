const router = require("express-promise-router")();
const controller = require("../../controllers/admin/studentController");
router.post("/", controller.accept);
router.get("/", controller.all);
module.exports = router;