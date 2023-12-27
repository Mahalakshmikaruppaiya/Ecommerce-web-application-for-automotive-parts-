import { Component } from '@angular/core';
import { FavouriteService } from '../favourite.service';
import { DataService } from '../data.service';
import { ProductInfoService } from '../product-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductInfo } from '../product-info';

@Component({
  selector: 'app-favourite-info',
  templateUrl: './favourite-info.component.html',
  styleUrls: ['./favourite-info.component.scss']
})
export class FavouriteInfoComponent {
  product!:ProductInfo;
  id!:number;
  buyProductId!:number;
  subscription!:Subscription;
  constructor(private router:Router,
    private productService:ProductInfoService,
    private route:ActivatedRoute,
    private data:DataService,
    private favouriteService:FavouriteService){}
  
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.product=new ProductInfo();
      console.log(this.id);
      this.productService.getProductById(this.id).subscribe(data=>
        {
          console.log(data);
          this.product=data;
        },
        (error:any)=>console.log(error));
    }
    goToHome2()
  {
    this.router.navigate(['/favourite']);
  }
  
  deleteProduct()
  { this.subscription=this.data.currentId.subscribe(message=>
    {this.buyProductId=message});
    
    this.favouriteService.deleteFavouriteById(this.buyProductId).subscribe((data)=>
    {
  
      console.log(data);
    })
    alert("Product Removed");
    this.router.navigate(['/myPurchases']);
  
  }
  buy(id:number)
  {
    this.router.navigate(['/paymentMethod',id]);
  }
  search(productName:string)
  {
      this.router.navigate(['/search2',productName]);
  }
}
