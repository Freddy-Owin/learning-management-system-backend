const router = require("express-promise-router")();
const controller = require("../../controllers/admin/applicationController");
router.get("/", controller.all);
router.post("/", controller.confirmAsInstructor);
router.delete("/:id", controller.drop);
module.exports = router;