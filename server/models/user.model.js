import mongoose from "mongoose"
import { Project } from "./project.model.js"

const userSchema = new mongoose.Schema({
    lastname : {
        type : String,
        required : true,
        // unique : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    skills : [
        {
            type : String
        }
    ],
    firstname : {
        type : String,
        required : true
    },
    JobType : {
        type : String,
        // required : truex
    },
    Isseller : {
        type : Boolean,
        default : false
    },
    email : {
        type : String,
        required : true,
        unique : true

    },
    avatar : {
        type : String,
        required : false
    },
    phone : {
        type : Number,
        required : false
    },
    about : {
        type : String,
        required : false
    },
    experience : { 
        type : Number,
        default : 0
    },
    certifications:[
        {
            certname : {
                type : String
            },
            issuer : {
                type : String
            },
            year :{
                
            }
        }

    ],
    projects : [{
        name : {
            type : String
        },
        description : {
            type : String
        }
    }],
    
    education:{
        type:String

    },  
    password:{
        type:String,
        required : true

    },   
    country : {
        type : String
    }
},{
    timestamps : true
})

 export const User = mongoose.model("User" ,userSchema )