const router = require("express-promise-router")();
const controller = require("../../controllers/api/career")
router.get("/", controller.all);
router.get("/:id", controller.get);
router.post("/application", controller.apply);



module.exports = router;