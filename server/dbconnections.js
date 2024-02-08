const mongoose=require("mongoose")
const mongoURI = process.env.NODE_ENV === 'production' ? process.env.ATLAS_DB_URI : process.env.LOCAL_DB_URI;
//const mongoURI='mongodb://localhost:27017/demo'
var db=mongoose.connection

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
   useUnifiedTopology: true,
  });
db.on("error",console.error.bind("error","connection error"))
 db.once("open",function(){
 console.log("connection successful")
 })


module.exports=db


