import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Video } from '../video';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs:['videos'],
})
export class VideoListComponent implements OnInit {

@Output() SelectVideo=new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  onSelect(vid:Video){
    this.SelectVideo.emit(vid)
  }

}
