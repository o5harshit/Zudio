const mongoose = require("mongoose");
const Schema =  mongoose.Schema;

const userSchema = {
    Emailaddress : {
        type:String,
        required : true,
    },
    Name : {
        type : String,
        required : true,
    },
    Branch : {
        type: String,
        required : true,
    },
    Year : {
        type : Number,
        required : true,
    }
}

const User = mongoose.model("User",userSchema);

module.exports = User;
