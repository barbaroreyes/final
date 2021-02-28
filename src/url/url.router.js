const router = require("express").Router();
const controller = require("./url.controller"); 
const methodNotAllowed = require("../errors");     
const theUsesRouter = require("../uses/uses.router")

            /*THIS IS MY URL ROUTER*/
  
router
  .route("/")
  .get(controller.list) 
  .post(controller.create)
  .all(methodNotAllowed);



router
  .route("/:urlId")
  .get(controller.read)
  .put(controller.put)
  .all(methodNotAllowed);

router.use("/:urlId/uses", controller.checkUrlId, theUsesRouter);
 



module.exports = router;