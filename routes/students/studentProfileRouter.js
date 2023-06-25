const router = require("express-promise-router")();
const controller = require("../../controllers/students/student");
router.get("/courses/course/:user", controller.getCourse);
router.get("/courses/week/:user/:course", controller.getWeek);
router.get("/courses/lessons/:week", controller.getLesson);
router.get("/courses/lesson-detail/:id", controller.getDetailLesson);

module.exports = router;