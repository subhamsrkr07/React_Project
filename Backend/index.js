import express from "express"
import dotenv from 'dotenv'
import connectDb from "./Config/db.js"
import cookieParser from "cookie-parser"
import authRoutes from "./Routes/authRoutes.js"
import cors from 'cors'
import dataRoute from "./Routes/dataRoute.js"

dotenv.config()
let port = 8000

let app=express()


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
 
app.use("/api/auth",authRoutes)
app.use("/api/data",dataRoute) 




app.get("/",(req,res)=>{
    res.send("aaya re")
})

app.listen(port,()=>{
    console.log("hello from server")
    connectDb()
})
