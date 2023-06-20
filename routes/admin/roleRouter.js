const router = require("express-promise-router")();
const controller = require("../../controllers/admin/roleController");
router.get("/", controller.all);
router.post("/", controller.add);
router.route("/:id")
    .get(controller.get)
    .patch(controller.patch)
    .delete(controller.drop);

module.exports = router;