const router = require("express").Router({ mergeParams: true });
const controller = require("./uses.controller"); 
const methodNotAllowed = require("../errors");  


router
  .route("/")
  .get(controller.list)
  .all(methodNotAllowed);

router
  .route("/:useId")
  .get(controller.read)
  .delete(controller.destroy) 
  .all(methodNotAllowed);





module.exports = router