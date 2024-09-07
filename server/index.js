import express from "express"
import { dbConnect } from "./utility/DB.connect.js"
import dotenv from "dotenv"
// import { databaseConnect } from "./database/Databse.js"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
dotenv.config({})
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your client's origin
    credentials: true // Allow credentials (cookies, authorization headers, etc.) to be sent
}));

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())
const port = process.env.PORT

app.listen(port , () =>{
    console.log(`app listen at port ${port}`)
    dbConnect()
})


//Routes
import UserRoutes from "./routes/Auth.routes.js"

app.use('/user', UserRoutes);
