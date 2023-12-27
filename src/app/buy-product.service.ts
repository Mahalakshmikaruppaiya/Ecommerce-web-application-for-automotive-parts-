import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuyProduct } from './buy-product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyProductService 
{
  baseURL="http://localhost:9090/buyProduct";
  
  constructor(private httpClient:HttpClient) { }

  addBuyProduct(buyProduct:BuyProduct):
  Observable<BuyProduct>
  {
    return this.httpClient.post<BuyProduct>(`${this.baseURL}/${"add"}`,buyProduct);
  }

  getAllBuyProductByUserEmail(userEmail:string):
  Observable<BuyProduct[]>
  {
    return this.httpClient.get<BuyProduct[]>(`${this.baseURL}/${"getAllByEmail"}/${userEmail}`);
  }

  getAllProductId():
  Observable<number[]>
  {
    return this.httpClient.get<number[]>(`${this.baseURL}`);
  }

  deleteProductById(id:number):
  Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getPoductById(id:number):
  Observable<BuyProduct>
  {
    return this.httpClient.get<BuyProduct>(`${this.baseURL}/${id}`);
  }
}