var express=require('express');
var Video=require('../model/video.model')
var router=express.Router();
router.get('/videos',(req,res)=>{
  Video.find({}).exec((err,Videos)=>{
      if(err)res.send("Error Retrieving videos");
      else
      {
          res.json(Videos)
      }
  })

})
router.post('/videos',(req,res)=>{
    var newVideo=new Video();
    newVideo.title=req.body.title;
    newVideo.url=req.body.url;
    newVideo.description=req.body.description;
    newVideo.save((err,insertVidep)=>{
        if(err)
        {
            res.send("Erron in saving video")
        }
        else
        {
            res.json(insertVidep)
        }
    })
})


router.put('/videos/:id', function(req, res, next){
    console.log('Update a video');
    Video.findByIdAndUpdate(req.params.id,
    {
        $set: {title: req.body.title, 
            url: req.body.url, description:req.body.description}
    },
    {
        new: true
    },
    function(err, updatedVideo){
        if(err){
            res.send("Error updating video");
        }else{
            res.json(updatedVideo);
        }
    }
    )
})



router.delete('/videos/:id', function(req, res, next){
    console.log('Deleting a video');
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if(err){
            res.send("Error deleting video");
        }else{
            res.json(deletedVideo);
        }
    })
})
module.exports=router