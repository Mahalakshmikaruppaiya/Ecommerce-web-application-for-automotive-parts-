import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from './user-info';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService 
{

  constructor(private httpClient:HttpClient) { }

  baseURL="http://localhost:9090/userInfo";

  addProfile(profile:UserInfo):
  Observable<object>
  {
    return this.httpClient.post(`${this.baseURL}`,profile);
  }

  getProfileByEmail(email:string):
  Observable<UserInfo>
  {
    return this.httpClient.get<UserInfo>(`${this.baseURL}/${"email"}/${email}`)
  }

  updateProfileById(id:number,user:UserInfo):
  Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL}/${id}`,user);
  }

  getProfileById(id:number):
  Observable<UserInfo>
  {
    return this.httpClient.get<UserInfo>(`${this.baseURL}/${id}`)
  }

  getAllProfileByProductId(id:number):
  Observable<UserInfo[]>
  {
    return this.httpClient.get<UserInfo[]>(`${this.baseURL}/${"getAllUser"}/${id}`);
  }
}

