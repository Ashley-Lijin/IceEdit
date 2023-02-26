import mongoose from "mongoose";

const heroSchema = mongoose.Schema({
    intro:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    youAre:{
        type:String,
        require:true
    },
    heroImg:{
        type:String,
        require:true
    }
})

module.exports = mongoose.models.hero || mongoose.model('hero', heroSchema)