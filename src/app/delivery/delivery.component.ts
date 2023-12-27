import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyProductService } from '../buy-product.service';
import { ProductInfoService } from '../product-info.service';
import { ProductInfo } from '../product-info';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit{

  productInfo!:ProductInfo;
  productList!:ProductInfo[];
  productId!:number[];

  constructor( private router:Router,
  
    private productService:ProductInfoService){}
  ngOnInit(): void {
    this.productService.getAllproductId().subscribe(data=>
      {
        console.log(data);
        this.productService.getAllProductByProductId().subscribe(data1=>
          {
            this.productList=data1
            console.log(data1);
          },
          (error:any)=>console.log(error));
      },
      (error:any)=>console.log(error));
      // this.buyProductService.getAllProductId().subscribe(data1=>
        
      //   {
      //     console.log(data1);
      //     this.productId=data1;
    
      //   });
        // for(let i=0;i<(this.productId.length);i++)
        // {
        //   this.productService.getProductById(this.productId[i]).subscribe(data=>
        //     {
        //         this.productList.push(data)
        //     },
        //     (error:any)=>console.log(error));
        // }
  }

  goToDeliveryInfo(id:number)
  {
      this.router.navigate(['/deliveryInfo',id]);
  }
}
