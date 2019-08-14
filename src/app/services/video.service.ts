import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Video } from '../video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
 //header=new HttpHeaders("Content-Type: application/json; charset=UTF-8");
 
//header("Content-Type: application/json; charset=UTF-8");
 

headers = new HttpHeaders({
  "Content-Type": "application/json", 
  "Accept": "application/json"
})

  constructor(private _http:HttpClient) { }
private _getUrl="http://localhost:3000/api/user/videos"
private _postUrl="http://localhost:3000/api/user/videos"
private _putUrl="http://localhost:3000/api/user/videos/"
private _delUrl="http://localhost:3000/api/user/videos/"
   

   
getVideos():Observable<any>{
return this._http.get<any>(this._getUrl,{headers:this.headers})
}

addVideos(video:Video):Observable<any>{

  let header=new HttpHeaders({'content-Type':'application/json'})
 // let options=new Request({headers:header})
return this._http.post<any>(this._postUrl,JSON.stringify(video),{headers:header})

}

update(video:Video)
{
  let header=new HttpHeaders({'content-Type':'application/json'})
  return this._http.put(this._putUrl + video._id,JSON.stringify(video),{headers:header})
}

deleteVideo=(video)=>{
  return this._http.delete(this._delUrl + video._id)
}


}
