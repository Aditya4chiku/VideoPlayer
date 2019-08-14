import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { User } from './user';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MYZOMATO';

userModel=new User(" amir","aditya",23333," ")

  reload=[];
  topics=["PHY","vfr","hyu"]
 



}
