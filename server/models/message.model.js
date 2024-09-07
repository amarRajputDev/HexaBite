import mongoose from "mongoose"
import { User } from "./user.model"
import { Conversation } from "./conversation.model"


const conversationSchema = new mongoose.Schema({
    conversationId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : Conversation
    },
    sellerId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : User
    },
    buyerId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : User
    },
   
   Message:{
        type:String,
        
    }
},{})