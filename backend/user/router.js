//initialize express router
let router = require("express").Router();

//set default API response
router.get("/", function (req, res) {
  res.json({
    status: "API Works",
    message: "Welcome to FirstRest API",
  });
});

//Import User Controller
var userController = require("./userController");

// User routes
router.route("/user").get(userController.index).post(userController.add);
router
  .route("/user/:user_id")
  .get(userController.view)
  .put(userController.update)
  .delete(userController.delete);

//Export API routes
module.exports = router;
