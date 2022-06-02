const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
       
    },
    age:{
        type: String,
       
    },
    contactno: {
        type:String,
       
    },
    studentid: {
        type:String,
       
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
})
module.exports = mongoose.model("sudent",StudentSchema)