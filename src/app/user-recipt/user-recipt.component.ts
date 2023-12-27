import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../user-info';
import { ProductInfo } from '../product-info';
import { ActivatedRoute, Router } from '@angular/router';
import { BuyProductService } from '../buy-product.service';
import { BuyProduct } from '../buy-product';
import { ProductInfoService } from '../product-info.service';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-user-recipt',
  templateUrl: './user-recipt.component.html',
  styleUrls: ['./user-recipt.component.scss']
})
export class UserReciptComponent implements OnInit {

  id!:number;
  userEmail!:string;
  productId!:number;
  paymentMethod!:string;
  cardNumber!:number;
  cardWonerName!:string;
  bankName!:string;
  branch!:string;
  gPayUserName!:string;
  gPayUpi!:string;
  

  constructor(private router:Router,
    private route:ActivatedRoute,
    private buyProductService:BuyProductService,
    private productInfoService:ProductInfoService,
    private userInfoService:UserInfoService){}

  userInfo:UserInfo=new UserInfo();
  product:ProductInfo=new ProductInfo();
  buyProduct:BuyProduct=new BuyProduct();

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.buyProductService.getPoductById(this.id).subscribe(data=>
      {
        console.log("---------------------------------------------------");
        console.log(data);
        this.buyProduct=data;
        this.paymentMethod=this.buyProduct.paymentMethod;
        this.cardNumber=this.buyProduct.debitCardNumber;
        this.cardWonerName=this.buyProduct.cardWonerName;
        this.bankName=this.buyProduct.bankName;
        this.branch=this.buyProduct.bankBranch;
        this.gPayUserName=this.buyProduct.googlePayUserName;
        this.gPayUpi=this.buyProduct.upi;

         this.productInfoService.getProductById(this.buyProduct.productId).subscribe(data=>
          {
            console.log(data);
            this.product=data;
          },
          (error:any)=>console.log(error));
         this.userInfoService.getProfileByEmail(this.buyProduct.userEmail).subscribe(data=>
          {
            this.userInfo=data;
          },
          (error:any)=>console.log(error));

      },
      (error:any)=>console.log(error));
      console.log("--------------------------------");
      console.log("id is produc id is"+this.buyProduct.productId);

   
   
  }

  search(productName:string)
  {
      this.router.navigate(['/search2',productName]);
  }
  goToGetProductById()
  {
    this.router.navigate(['/myPurchasesInfo',this.buyProduct.productId]);
  }

}
