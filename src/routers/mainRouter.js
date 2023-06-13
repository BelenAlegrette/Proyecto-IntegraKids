const { Router } = require("express");
const mainController = require("../controllers/mainController");

const router = Router();

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/loginRegistro", mainController.loginRegistro);
router.get("/blog", mainController.blog);
router.get("/foro", mainController.foro);

module.exports = router;
