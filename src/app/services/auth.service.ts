import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  url="https://dummyjson.com/"
  
  logIn(data:any){
    return this.http.post(this.url +'auth/login',data);
  }

  getToken(){
    return localStorage.getItem('token')
  }

  /*getSwitchForm(){
    return localStorage.getItem('switchForm')
  }*/

}
