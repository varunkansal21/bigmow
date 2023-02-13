const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var fetchUser = require("../middleware/fetchUser")


const jwt_secret = "bigmow_user";

// ROUTE 1: Create a user using post: /api/auth/createuser . no login required
router.post('/createuser', [
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
  body('email', 'Enter a valid email').isEmail(),
//   body('name', 'Enter a valid name').isLength({ min: 3 }),
], async (req, res) => {

  // if there are eerors return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // check whether the email already exist
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry user with this email already exist" })
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
    //   name: req.body.name,
      password: secPass,
      email: req.body.email
    })
    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = await jwt.sign(data, jwt_secret);

    res.json({ authToken })
    return;
    // res.send("hello");
  }

  catch { errors } {
    // console.error(error.message);
    res.status(500).send("Some error occured");
    return;
  }
})


// ROUTE 2:Authenticate a user: /api/auth/login .

router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be empty').exists(),
], async (req, res) => {
  // if there are eerors return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Sorry you entered wrong credentials" });
    }
    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      return res.status(400).json({ error: "Sorry you entered wrong credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = await jwt.sign(data, jwt_secret);

    res.json({ authToken });
    return;

  }
  catch { error } {
    console.error(errors.message);
    res.status(500).send("Some error occured");
    return;
  }

})





// ROUTE 3: get user details using post: /api/auth/getuser . login required

router.post('/getuser', fetchUser, async (req, res) => {
  try {
    var userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  }
  catch (error) {
    res.status(500).send("Some error occured");
  }

})







module.exports = router;


