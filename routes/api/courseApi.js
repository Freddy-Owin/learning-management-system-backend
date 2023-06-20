const router = require("express-promise-router")();
const controller = require("../../controllers/api/courses")
router.get("/", controller.all);
router.get("/home", controller.home);
router.get("/detail/:id", controller.detail);


module.exports = router;