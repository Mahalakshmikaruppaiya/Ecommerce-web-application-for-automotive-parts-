import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInfo } from '../product-info';
import { ProductInfoService } from '../product-info.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit
{
  productList!:ProductInfo[];
  // product!:ProductInfo[];
  constructor(private router:Router,
    private productService:ProductInfoService){}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(data=>{
      this.productList=data;
    },
    (error:any)=>console.log(error));
  }
  goToProduct()
  {
    this.router.navigate(['/product']);
  }

  getProductById(id:number)
  {
      this.router.navigate(['/adminGetProductById',id]);
  }

  search(productName:string)
  {
    this.router.navigate(['/adminSearch',productName]);
  }
}
