import mongoose from "mongoose";

const SoftHeadSchema = mongoose.Schema({
    Title:{
        type:String,
        require:true
    }
})


module.exports = mongoose.models.softSchema || mongoose.model('softSchema',SoftHeadSchema)