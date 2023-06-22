const mongoose = require('mongoose');


const chatmodel = mongoose.Schema(
    {
        chatName: { type:String, trim:true },
        isGroupChat: {type:Boolean, default:false},
        users:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:user
        },
    ],
    latesmessage: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"message"
    },
    groupadmin: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
    },
    {
        timestamps : true,
    }
    )

    const chat = mongoose.model("chat", chatmodel)
    
    module.exports = chat;