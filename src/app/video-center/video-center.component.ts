import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  constructor(    private _videoService:VideoService ) { }
   hiddenVideo:boolean=true
  videos:any


selectedVideo:Video

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo)

  }

  onSubmitAddVideo(video:Video)
  {
this._videoService.addVideos(video).subscribe(resNewVideo=>{
  this.hiddenVideo=true;
  this.videos.push(resNewVideo);
  this.selectedVideo=resNewVideo;
  console.log(this.selectedVideo)
})
  
}

newVideo(){
    this.hiddenVideo= false;
}
   ngOnInit() {
       this._videoService.getVideos().subscribe(resVideos=>this.videos=resVideos)
  }
  onDeleteVideoEvent=(video:any)=>{
   let videoArray=this.videos;
   this._videoService.deleteVideo(video).subscribe(
     resDeleteVideo =>{
       for(let i=0 ;i<videoArray.length;i++)
       {
         if(videoArray[i]._id === video._id )
         {
           videoArray.splice(i,1)
         }
       }
     }
   )
   this.selectedVideo=null


  }



  onUpdateVideoEvent(video:any)
  {
   this._videoService.update(video).subscribe(resUpdatedVideo=>video=resUpdatedVideo)
  this.selectedVideo=null
  }




}
