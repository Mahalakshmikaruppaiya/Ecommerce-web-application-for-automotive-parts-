import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInfo } from './product-info';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService 
{

  
  constructor(private httpClient:HttpClient) { }

  baseURL="http://localhost:9090/product";

  addProduct(product:ProductInfo):
  Observable<object>
  {
    return this.httpClient.post(`${this.baseURL}/${"add"}`,product);
  }

  getAllProduct():
  Observable<ProductInfo[]>
  {
    return this.httpClient.get<ProductInfo[]>(`${this.baseURL}/${"get"}`);
  }

  getProductById(id:number):
  Observable<ProductInfo>
  {
    return this.httpClient.get<ProductInfo>(`${this.baseURL}/${id}`);
  }

  getAllproductId():
  Observable<number[]>
  {
    return this.httpClient.get<number[]>(`${this.baseURL}/${"getAllProductId"}`);
  }

  getAllProductByProductId():
  Observable<ProductInfo[]>
  {
    return this.httpClient.get<ProductInfo[]>(`${this.baseURL}/${"getAllProductById"}`);
  }

  deleteProductById(id:number):
  Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

  updateProductById(id:number,product:ProductInfo):
  Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL}/${id}`,product);
  }

  getAllProductBySearch(productName:string):
  Observable<ProductInfo[]>
  {
    return this.httpClient.get<ProductInfo[]>(`${this.baseURL}/${"search"}/${productName}`);
  }
}
