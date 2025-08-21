import mongoose, { connect } from "mongoose";


const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB CONNECTED")
    } catch (error) {
        console.log("db error",error)
    }
}

export default connectDb