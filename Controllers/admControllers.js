
const Devote  =  require('../Models/DevoteInfo')



 async function addDevote(req,res){
    const {userName,userFatName,userMobNum,userFatNum, userAdharNum} = req.body
    await Devote.create({
        userName:userName,
        userFatName:userFatName,
        userMobNum:userMobNum,
        userFatNum:userFatNum,
        userAdharNum:userAdharNum,


    })
    console.log("user created");
    res.send({"status":"sucess"})
}

module.exports = {
    addDevote,
}

