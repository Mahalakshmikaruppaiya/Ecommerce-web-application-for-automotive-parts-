import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favourite } from './favourite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private httpClient:HttpClient) { }

  baseURL="http://localhost:9090/favourite";

  addFavourite(favourite:Favourite):
  Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}/${"add"}`,favourite);
  }

  getAllFavouriteByEmail(email:string):
  Observable<Favourite[]>
  {
    return this.httpClient.get<Favourite[]>(`${this.baseURL}/${"email"}/${email}`);
  }

  getFavouriteById(id:number):
  Observable<Favourite>
  {
    return this.httpClient.get<Favourite>(`${this.baseURL}/${"id"}/${id}`);
  }

  deleteFavouriteById(id:number):
  Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
