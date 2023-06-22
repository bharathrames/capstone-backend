const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
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

const user = new mongoose.model("user", userschema)

module.exports.user = user ;