const expres = require('express');
const path = require('path')
const admControler = require('../Controllers/admControllers');
const admRout = expres.Router();
const multer = require('multer');

const Storage = multer.diskStorage({
    
    destination:(req,file,cb)=>{
       
            cb(null,path.join(__dirname, '..', 'temp','uploads'))
    },
    filename:(req,file,cb)=>{
        console.log("the file properties are",file)
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: Storage })


admRout.post('/devote',upload.single('image'), admControler.addDevote);
admRout.get('/userInfo',admControler.userInfo);






module.exports  = admRout;
