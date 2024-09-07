import mongoose from "mongoose"
import { User } from "./user.model"

const reviewSchema = new mongoose.Schema({
    gigId : {
        type:mongoose.Schema.Types.ObjectId,
        ref: Gig,
    },
    userId : {
        type:mongoose.Schema.Types.ObjectId,
        ref: User,
    },
    star : {
        type:Number,
        required : true,
        enum : [1,2,3,4,5]
    },
    comment : {
        type:String,
        required : true
    },
    
    
},{
    timestamps : true
})

 export const Review = mongoose.model("Review" ,reviewSchema )