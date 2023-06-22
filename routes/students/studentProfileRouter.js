const router = require("express-promise-router")();
const controller = require("../../controllers/students/student");
router.get("/courses/:user", controller.getCourse);
router.get("/courses/:user/:course", controller.getWeek);
module.exports = router;