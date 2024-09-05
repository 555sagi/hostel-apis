const expres = require('express');
const admControler = require('../Controllers/admControllers');
const admRout = expres.Router();

admRout.post('/devote',admControler.addDevote);






module.exports  = admRout;
