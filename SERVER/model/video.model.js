const mongoose=require('mongoose');
var VideoSceham=mongoose.Schema({
    title:String,
    url:String,
    description:String
})
module.exports=mongoose.model('video',VideoSceham,'videos')