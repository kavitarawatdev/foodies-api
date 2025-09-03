require("dotenv").config();
const cors = require("cors"); 
const express = require ("express");
const products_routes = require("./routes/itemsRoute");
const connectDB = require("./DB/connectDB");

const app = express()

const PORT=process.env.PORT || 5000;

app.get("/",(req, res)=>{
    res.send("Hi I am Foodie Api by kavita Rawat")
});

app.use(cors({
  origin: [
    "http://localhost:5000",
    "http://localhost:8080",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// middleware or to set routers
app.use(express.json());
app.use("/api/products", products_routes);

const start=async()=>{
    try{
        await connectDB();
        app.listen(PORT,'0.0.0.0',()=>{
            console.log(`${PORT} yes i am connected.`);
        })
    }catch (error) {
        console.error("Error starting server:", error);
    }
}

start()