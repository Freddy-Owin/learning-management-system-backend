const router = require("express-promise-router")();
const controller = require("../../controllers/admin/careerController");
router.get("/", controller.all);
router.post("/", controller.add);
module.exports = router;