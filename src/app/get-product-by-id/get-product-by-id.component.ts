import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInfo } from '../product-info';
import { ProductInfoService } from '../product-info.service';
import { BuyProduct } from '../buy-product';
import { BuyProductService } from '../buy-product.service';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Favourite } from '../favourite';
import { FavouriteService } from '../favourite.service';

@Component({
  selector: 'app-get-product-by-id',
  templateUrl: './get-product-by-id.component.html',
  styleUrls: ['./get-product-by-id.component.scss']
})
export class GetProductByIdComponent implements OnInit{

  product!:ProductInfo;
  email:string="";
  subscription!:Subscription;
  imgUrl!:string;
  price!:number;
  productName!:string;

  buy!:Favourite;

  id!:number;

  constructor(private route:ActivatedRoute,
    private data:DataService,
    private productService:ProductInfoService,
    private router:Router,
    private favouriteService:FavouriteService){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.product=new ProductInfo();
    console.log(this.id);
    this.productService.getProductById(this.id).subscribe((data:ProductInfo)=>
      {
        console.log(data);
        this.product = data;
        this.imgUrl=this.product.productImgUrl;
        this.price=this.product.price;
        this.productName=this.product.productName;
      });
  }

  onSubmit(id:number)
  {
    
    this.router.navigate(['/paymentMethod',id]);
    // this.buy=new BuyProduct();
    // this.subscription=this.data.currentValue.subscribe(message=>
    //   {this.email=message});
      

    //   this.buy.userEmail=this.email;
    //   this.buy.productId=this.id;
    //   this.buy.productName=this.productName;
    //   this.buy.imgUrl=this.imgUrl;
    //   this.buy.price=this.price;
      
    //  this.buyProductService.addBuyProduct(this.buy).subscribe(data=>
    //   {
    //     console.log(data);
    //     alert("Product Buyed successFully");
    //     this.router.navigate(['/myPurchases']);
    //   },
    //   (error)=>console.log(error));
  }

  search(productName:string)
  {
      this.router.navigate(['/search2',productName]);
  }
  addFavourite()
  {
    this.buy=new Favourite();
    this.subscription=this.data.currentValue.subscribe(message=>
      {this.email=message});
      

      this.buy.userEmail=this.email;
      this.buy.productId=this.id;
      this.buy.productName=this.productName;
      this.buy.imgUrl=this.imgUrl;
      this.buy.price=this.price;
      this.favouriteService.addFavourite(this.buy).subscribe(data=>
        {
          console.log(data);
          alert("Product Added Successfully");
          this.router.navigate(['/favourite']);
        })
    
  }
  goToHome2()
  {
    this.router.navigate(['/home2']);
  }
}
