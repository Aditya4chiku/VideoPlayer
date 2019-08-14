const  express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const  app=express();

require('../config/mongoose')
const port=3000;

app.listen(port,()=>{
console.log("port at" + port);
})