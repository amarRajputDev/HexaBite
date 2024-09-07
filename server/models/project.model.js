import mongoose, { Types } from "mongoose";
import { User } from "./user.model.js";

const ProjectSchema = new mongoose.Schema({
    projectTitle : {
        type :String
    },
    description : {
        type:String
    },
    
},{timestamps:true})

export  const Project = mongoose.model("Project" ,ProjectSchema)