import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminInfo } from './admin-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminInfoService {

  constructor(private httpClient:HttpClient) { }

  baseURL="http://localhost:9090/admin";

  updateAdminInfo(admin:AdminInfo):
  Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL}/${"update"}`,admin);
  }

  getAllAdmin():
  Observable<AdminInfo[]>
  {
    return this.httpClient.get<AdminInfo[]>(`${this.baseURL}/${"get"}`);
  }

  getAdminInfoById(id:number):
  Observable<AdminInfo>
  {
    return this.httpClient.get<AdminInfo>(`${this.baseURL}/${"get"}/${id}`);
  }
}
