import mongoose from "mongoose";

const socialScheema = new mongoose.Schema({
    Url:{
        type:String,
        require:true
    }
})