const express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("name must be at least 3 chars long!"),
    check("email").isEmail().withMessage("Provide a valid email id!"),
    check("password")
      .isLength({ min: 3 })
      .withMessage("password must be at least 3 chars long!"),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email").isEmail().withMessage("provide a valid email id"),
    check("password").isLength({ min: 3 }).withMessage("password is required"),
  ],
  signin
);
router.get("/signout", signout);
router.get("/testroute", isSignedIn, (req, res) => {
  res.send("A protected route");
});
module.exports = router;
