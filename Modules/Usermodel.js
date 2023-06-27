const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const userschema = new mongoose.Schema(
  {
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
    pic: {
      type: "String",
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
},
 {timestamps:true}
)

userschema.methods.matchpassword = async function (enteredpassword) {
   return await bcrypt.compare(enteredpassword, this.password)
}

userschema.pre("save", async function (next){
  if(!this.isModified){
    next()
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)

})

const User = new mongoose.model("User", userschema)

module.exports = User ;