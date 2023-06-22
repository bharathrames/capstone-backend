const asyncHandler = require("express-async-handler");
const user = require('../Modules/Usermodel');
const generatetoken = require('../config/generatetoken');

const registeruser = asyncHandler(async  (req, res) => {
   
    const {name, email, password, pic} = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please Enter all the Feilds");
    }
    console.log(user)
    const userexist = await user.findOne({email})
    if (userexist) {
        res.status(400);
        throw new Error("User already exists");
      }
  
      const user = await user.create({
        name,
        email,
        password,
        pic,
      });
      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          pic: user.pic,
          token:generatetoken(user._id),
        });
      } else {
        res.status(400);
        throw new Error("User not found");
      }
})

module.exports = { registeruser }