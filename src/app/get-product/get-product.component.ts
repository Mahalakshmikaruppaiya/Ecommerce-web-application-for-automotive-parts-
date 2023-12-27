import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInfo } from '../product-info';
import { ProductInfoService } from '../product-info.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.scss']
})
export class GetProductComponent implements OnInit{
  
  productList!:ProductInfo[];
  constructor(private productService:ProductInfoService,private router:Router){}
  ngOnInit(): void {
  this.getAllProducts();
  }

  getAllProducts()
  {
    this.productService.getAllProduct().subscribe(data=>{
      this.productList=data;
    },
    (error:any)=>console.log(error));
  }

  getProductById(id:number)
  {
      this.router.navigate(['/getProductById',id]);
  }

}
