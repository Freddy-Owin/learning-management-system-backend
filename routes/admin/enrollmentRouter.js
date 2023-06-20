const router = require("express-promise-router")();
const controller = require("../../controllers/admin/studentEnrollmentConroller");
router.get("/", controller.all);
router.delete("/:id", controller.drop);


module.exports = router;