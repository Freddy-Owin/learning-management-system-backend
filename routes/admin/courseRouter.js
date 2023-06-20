const router = require("express-promise-router")();
const controller = require("../../controllers/admin/courseController");
router.get("/", controller.all);
router.post("/", controller.add);
router.patch("/available/:id", controller.available);
router.patch("/:id", controller.patch);
router.get("/:id", controller.get);
router.get("/batch/:id", controller.relatedBatch);

module.exports = router;