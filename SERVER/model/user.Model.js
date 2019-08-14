const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
 username:String,
 password:Number,
});

module.exports=mongoose.model('user',userSchema,'users');
