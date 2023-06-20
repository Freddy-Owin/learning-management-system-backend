const router = require("express-promise-router")();
const controller = require("../../controllers/admin/batchController");

router.post("/", controller.add);
router.patch("/status/:id", controller.closeBatch);
router.delete("/delete/:id", controller.drop);
router.get("/get-to-accept/:course", controller.getToAccept);

module.exports = router;