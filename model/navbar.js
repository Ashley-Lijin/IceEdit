import mongoose from "mongoose";

const navbarSchema = new mongoose.Schema({
    navItem:{
        type:String,
        require:true
    },
    navUrl:{
        type:String,
        require:true
    }
})


module.exports = mongoose.models.navbar || mongoose.model('navbar',navbarSchema)