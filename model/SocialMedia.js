import mongoose from "mongoose";

const socialScheema = new mongoose.Schema({
    Url:{
        type:String,
        require:true
    }
})

module.exports = mongoose.models.ScoialMedia || mongoose.model('ScoialMedia',socialScheema)