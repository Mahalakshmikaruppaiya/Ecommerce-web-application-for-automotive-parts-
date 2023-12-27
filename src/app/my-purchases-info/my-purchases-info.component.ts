import { Component, OnInit } from '@angular/core';
import { ProductInfo } from '../product-info';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInfoService } from '../product-info.service';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { BuyProductService } from '../buy-product.service';

@Component({
  selector: 'app-my-purchases-info',
  templateUrl: './my-purchases-info.component.html',
  styleUrls: ['./my-purchases-info.component.scss']
})
export class MyPurchasesInfoComponent implements OnInit{
product!:ProductInfo;
id!:number;
buyProductId!:number;
subscription!:Subscription;
constructor(private router:Router,
  private productService:ProductInfoService,
  private route:ActivatedRoute,
  private data:DataService,
  private buyProductService:BuyProductService){}


  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.product=new ProductInfo();
    console.log(this.id);
    this.subscription=this.data.currentId.subscribe(message=>
      {this.buyProductId=message});
    this.productService.getProductById(this.id).subscribe(data=>
      {
        console.log(data);
        this.product=data;
      },
      (error:any)=>console.log(error));
  }
  goToHome2()
{
  this.router.navigate(['/myPurchases']);
}

deleteProduct()
{   
  this.buyProductService.deleteProductById(this.buyProductId).subscribe((data)=>
  {

    console.log(data);
  })
  alert("Order Canceled");
  this.router.navigate(['/myPurchases']);

}

goToUserRecipt()
{
  this.router.navigate(['/userRecipt',this.buyProductId]);
}
search(productName:string)
{
    this.router.navigate(['/search2',productName]);
}
}
