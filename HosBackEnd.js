const express = require('express');
const app = express();
const port  = process.env.PORT
const connection = require('./Connection');
const admRout  = require('./Routes/Admin')
app.use(express.json());


app.use(admRout);

app.listen(port,()=>{
    console.log(`application started at port ${port}`)
})

connection()
