const router = require("express-promise-router")();
const controller = require("../../controllers/admin/lessonController");

router.get("/:week", controller.all);
router.get("/detail/:id", controller.get);
router.post("/", controller.add);
router.delete("/delete/:id", controller.drop);
module.exports = router;