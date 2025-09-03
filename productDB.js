require ("dotenv").config();
const connectDB = require("./DB/connectDB");
const ProductModel = require("./models/model");
const ProductJSON = require("./products.json")

const start = async()=>{
    try{
        await connectDB( process.env.MONGO_DB_URI );
        await ProductModel.deleteMany();
        await ProductModel.create(ProductJSON);
        console.log("success");
    }catch(error){
        console.log(error);
    }
}
start()