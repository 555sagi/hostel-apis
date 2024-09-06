
const Devote  =  require('../Models/DevoteInfo');
const fs  = require('fs');
const path = require('path');





 async function addDevote(req,res){
    const userImage  = fs.readFileSync(path.join(__dirname, '..', 'temp','uploads' , req.file.filename));
    const {userName,userFatName,userMobNum,userFatNum, userAdharNum} = JSON.parse(req.body.data)
    await Devote.create({
        userName:userName,
        userFatName:userFatName,
        userMobNum:userMobNum,
        userFatNum:userFatNum,
        userAdharNum:userAdharNum,
        userImage:userImage
})
    console.log("user created");
    res.send({"status":"sucess"})
}


async function userInfo(req,res){
   try{
    const user = await Devote.findOne({userMobNum:req.query.userMobNum});
        if(user){
            res.send(user);

        }else{
            res.status(404).send({'message':"no user found"});
        }


   }catch(err){
    console.log(err);
    res.status(500).send({"message":"server error"})
   }
}



module.exports = {
    addDevote,
    userInfo,
}

