const express = require("express");
const router = express.Router();
const UserController = require("./controller");

router
  .get("/all", UserController.get)
  .post("/create", UserController.createuser)
  .post("/login", UserController.login);
// .post("/contact/edit/:id", ContactController.update)
// .post("/contact/delete/:id", ContactController.delete);
module.exports = router;
