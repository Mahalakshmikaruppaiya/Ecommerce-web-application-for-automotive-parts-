import { Component, OnInit } from '@angular/core';
import { BuyProductService } from '../buy-product.service';
import { Router } from '@angular/router';
import { BuyProduct } from '../buy-product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-purchases',
  templateUrl: './my-purchases.component.html',
  styleUrls: ['./my-purchases.component.scss']
})
export class MyPurchasesComponent implements OnInit 
{
  buyProductList!:BuyProduct[];
  email!:string;
  constructor(private buyProducrService:BuyProductService,
   private router:Router,
   private data:DataService){}


    ngOnInit(): void {
      this.data.currentValue.subscribe(message=>
        {
          this.email=message;
        });
      this.buyProducrService.getAllBuyProductByUserEmail(this.email).subscribe(data=>
        {
          console.log(data);
          if(data.length==0)
          {
              this.router.navigate(['/myPurchaseEmpty']);
          }
          else{
          this.buyProductList=data;
          }
        });
      
    }
    
    search(productName:string)
    {
        this.router.navigate(['/search2',productName]);
    }
    goToMyPurchasesInfo(id:number,id1:number)
    {
      this.router.navigate(['/myPurchasesInfo',id]);
      this.data.getId(id1);
    }
}
