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

const getIndItem = async (req, res) => {
  try {
    console.log("params :", req.params);
    const { id } = req.params;
    console.log("id :", id);
    const data = await productModel.findById(id);
    console.log("data :", data);

    if (!data) {
      return res.status(404).json({ error: "item not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Invalid ID format or server error" });
  }
};


module.exports = {
    getAllItems,
    getAllItemsTesting,
    getIndItem
}