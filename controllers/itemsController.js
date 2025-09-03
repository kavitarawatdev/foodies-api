const productModel=require("../models/model")

const getAllItems= async(req , res)=>{
    try{
        console.log("query :",req.query);
        const data= await productModel.find(req.query)
        res.status(200).json({
            data:data
        })
    }catch(error){
        console.log(error);
    }
}

const getAllItemsTesting= async(req , res)=>{
    res.status(200).json({
        message:"I am getAllItemsTesting"
    })
}

module.exports = {
    getAllItems,
    getAllItemsTesting
}