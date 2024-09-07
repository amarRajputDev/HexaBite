import mongoose from "mongoose"
import { User } from "./user.model"


const conversationSchema = new mongoose.Schema({
    messageId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : Message
    },
    sellerId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : User
    },
    buyerId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : User
    },
    readBySeller:{
        type: Boolean,
        default:false
    },
    readByBuyer:{
        type: Boolean,
        default:false
    },
    lastMessage:{
        type:String,

    }
},{})

const Conversation = mongoose.model("Conversation",conversationSchema)