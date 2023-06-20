const router = require("express-promise-router")();
const controller = require("../../controllers/api/auth");
const { AuthSchema } = require("../../helper/schema");
const { validateBody, verifyEmail, verifyPassword, validateEmail } = require("../../helper/validator");

router.post("/register/:role", [validateBody(AuthSchema.register),validateEmail(),controller.register]);
router.post("/admin/register", controller.adminRegister);
router.post("/login", [validateBody(AuthSchema.login), verifyEmail(), verifyPassword(), controller.login]);
router.get("/logout", controller.logout);
router.get("/authData", [controller.authData]);



module.exports = router;