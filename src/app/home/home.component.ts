import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInfo } from '../product-info';
import { ProductInfoService } from '../product-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
 
  search:string="";
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

  getProductById()
  {
    alert("pleace Login")
      this.router.navigate(['/login']);
  }

  serch(productName:string)
  {
    
    this.router.navigate(['/search1',productName]);
  }
}

