const mongoose=require('mongoose');
const url='mongodb://localhost:27017/users'
mongoose.connect(url,(err)=>{
    if(err)
    {
        console.log(err)
    }

})
module.exports=mongoose;