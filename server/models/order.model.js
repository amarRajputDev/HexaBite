import mongoose from "mongoose"
import { Gig } from "./gig.model"
import { User } from "./user.model"

const orderSchema = new mongoose.Schema({
    gigId :{
        type : mongoose.Schema.Types.ObjectId,
        ref:Gig 
    },
    sellerId :{
        type : mongoose.Schema.Types.ObjectId,
        ref:User 
    },
    buyerId :{
        type : mongoose.Schema.Types.ObjectId,
        ref:User 
    },
    img :{
        type : String,
        required : true
    },
    price :{
        type : Number,
        required:true
    },
    isComplete :{
        type : Boolean,
        default : true
    }
},{
    timestamps : true
})

 export const Order = mongoose.model("Order" ,orderSchema )