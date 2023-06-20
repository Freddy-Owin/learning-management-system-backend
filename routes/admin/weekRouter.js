const router = require("express-promise-router")();
const controller = require("../../controllers/admin/weekController");

router.get("/courses/:course/batch/:batch", controller.all);
router.post("/", controller.add);
router.delete("/delete/:id", controller.drop);
module.exports = router;