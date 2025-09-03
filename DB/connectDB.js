const mongoose =require("mongoose");
const connectDB=async()=>{
    console.log("connecting database");
    try {
        console.log("connecting mongodb");
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("MongoDB connected ✅");
    } catch (error) {
        console.log("MongoDB connection failed ❌", error);
    }
    
}

module.exports = connectDB