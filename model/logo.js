import mongoose from "mongoose";

const logoSchema = mongoose.Schema({
    imgUrl:{
        type:String,
        require:true
    },
    Name:{
        type:String,
        require:true
    }
})

module.exports = mongoose.models.Logo || mongoose.model('Logo',logoSchema)