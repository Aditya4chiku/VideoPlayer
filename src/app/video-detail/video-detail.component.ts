import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
 @Input() video
 @Output() updateVideoEvent=new EventEmitter();
 @Output() deleteVideoEvent=new EventEmitter();
  editTitle:boolean=false

  
ngOnInit() {
  }
  ngOnChanges(){
    this.editTitle=false
  }
  ontitleClick(){
    this.editTitle=true
  }
updateVideo=()=>{
  this.updateVideoEvent.emit(this.video)
}

deleteVideo=()=>{
this.deleteVideoEvent.emit(this.video)
}

}
