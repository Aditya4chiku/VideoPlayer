const  express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const path=require('path')
const  app=express();
app.use(cors())

app.use(express.static(path.join(__dirname,'dist')));

const userRoute=require('../SERVER/routes/user.routes');
const videoRoute=require('../SERVER/routes/videoes.route')
app.use(bodyParser.json())
app.use('/api/user',userRoute);
app.use('/api/user',userRoute);
app.use('/api/user',videoRoute)




app.get('*',(req,res)=>{
    //res.send("i m")
    res.sendFile(path.join(__dirname,'dist/index.html'))
})





require('../SERVER/config/mongoose')
const port=3000;

app.listen(port,()=>{
console.log("port at" + port);
})