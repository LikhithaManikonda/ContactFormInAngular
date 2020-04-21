import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { UserInformation } from './user-information';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactInformationServiceService {
   URL = "https://qzpih2vgkb.execute-api.ap-south-1.amazonaws.com/beta/submitform";
 //URL="localhost:8080/api/processMail";
  constructor(private _http:HttpClient) { }

  sendToAPI(userInfo:UserInformation):Observable<any>{
    console.log("Iam from Contact Info service:")
    console.log(userInfo)
    return this._http.post(this.URL,userInfo);
  }
}
