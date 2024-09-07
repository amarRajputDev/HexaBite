import mongoose from "mongoose";

export const dbConnect = async() =>{
    try {
        const responce = await mongoose.connect(process.env.MONGO_URI).then((res)=>console.log("Database cannected"))

        // console.log(responce)
    } catch (error) {
        console.log(error)
    }
}