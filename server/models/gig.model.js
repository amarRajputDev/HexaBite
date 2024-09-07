import mongoose from "mongoose"
import { User } from "./user.model"

const gigSchema = new mongoose.Schema({
    userId : {
        type:mongoose.Schema.Types.ObjectId,
        ref: User,
    },
    title : {
        type: String,
        required : true
    },
    price : {
        type: Number,
        required : true
    },
    category : {
        type: String,
        required : true
    },
    img : [
        {
            type : String
        }
    ],
    coverImg : {
        type: String,
        required : true
    },
    shortTitle : {
        type: String,
        required : true
    },
    shortDesc : {
        type: String,
        required : true
    },
    deliverTime : {
        type: Number,
        required : true
    },
    revision : {
        type: Number,
        required : true
    },
    features : {
        type: [String],
        required : true
    },
    totalStars : {
        type: Number,
        default : 0
    },
    sales : {
        type: Number,
        default : 0
    },
    
},{
    timestamps : true
})

 export const Gig = mongoose.model("Gig" ,gigSchema )