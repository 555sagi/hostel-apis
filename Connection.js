const mongoose = require('mongoose');
const url = process.env.URL;

const Connect = async ()=>{
   
   try{

       await mongoose.connect(url);
       console.log("the connection is sucessful at",url)
   }catch(err){
    console.log(err)
   }
}

module.exports = Connect;
