const router            = require("express").Router();
const contectController = require("../controllers/contectController");
const upload            =  require("../middleware/upload");

router.post("/" ,upload.array('filepath[]'), contectController.create_contect);
router.get("/",contectController.contect_all);


module.exports = router;