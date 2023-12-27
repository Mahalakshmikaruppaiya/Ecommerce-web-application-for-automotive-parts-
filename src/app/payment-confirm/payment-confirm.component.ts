import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Favourite } from '../favourite';
import { FavouriteService } from '../favourite.service';
import { ProductInfoService } from '../product-info.service';
import { ProductInfo } from '../product-info';
import { UserInfo } from '../user-info';
import { UserInfoService } from '../user-info.service';
import { BuyProduct } from '../buy-product';
import { BuyProductService } from '../buy-product.service';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { PaymentConfirm } from '../payment-confirm';

@Component({
  selector: 'app-payment-confirm',
  templateUrl: './payment-confirm.component.html',
  styleUrls: ['./payment-confirm.component.scss']
})
export class PaymentConfirmComponent implements OnInit{

  constructor(private router:Router,
    private favouriteService:BuyProductService,
    private route:ActivatedRoute,
    private productService:ProductInfoService,
    private userService:UserInfoService,
    private data:DataService){}

  subscription!:Subscription;
  product!:ProductInfo;
  favourite!:BuyProduct;
  userInfo!:UserInfo;
  
  userEmail!:string;
  productId!:number;
  paymentMethod!:string;
  cardNumber!:number;
  cardWonerName!:string;
  bankName!:string;
  branch!:string;
  gPayUserName!:string;
  gPayUpi!:string;
  date:any;

  paymentConfirm!:PaymentConfirm;

  ngOnInit(): void
  {
    // this.id=this.route.snapshot.params['id'];
    // console.log(this.id);
    this.subscription=this.data.currentPaymentMethod.subscribe(method=>
      {
        console.log(method);
        this.paymentMethod=method;
      });
    this.subscription=this.data.currentId.subscribe(id=>
      {
        this.productId=id;
      });
    this.subscription=this.data.currentValue.subscribe(email=>
      {
        this.userEmail=email;
      });
    this.subscription=this.data.currentNumber.subscribe(number=>
      {
        this.cardNumber=number;
      });
    this.subscription=this.data.currentName.subscribe(name=>
      {
        this.cardWonerName=name;
      });
    this.subscription=this.data.currentBankName.subscribe(bank=>
      {
        this.bankName=bank;
      });
    this.subscription=this.data.currentBranch.subscribe(branch=>
      {
        this.branch=branch;
      });
    this.subscription=this.data.currentBankName.subscribe(upi=>
      {
        this.gPayUpi=upi;
      });
    this.subscription=this.data.cardWonerNameSource.subscribe(name=>
      {
        this.gPayUserName=name;
      });
    this.subscription=this.data.currentDate.subscribe(date=>
      {
        this.date=date;
      });
    this.productService.getProductById(this.productId).subscribe(data=>
      {
        this.product=data;
        console.log(data);
      },
      (error:any)=>console.log(error));
    this.userService.getProfileByEmail(this.userEmail).subscribe(data1=>
      {
        console.log(data1);
        this.userInfo=data1;
      },
      (error:any)=>console.log(error));
  
    // this.subscription=this.data.currentInvoice.subscribe(invoice=>
    //   {
    //     console.log("invoice"+invoice);
    //     // this.paymentConfirm=invoice;
    //   })
    // this.favouriteService.get(this.id).subscribe(data=>
    //   {
    //     this.favourite=data;
    //     this.productService.getProductById(this.favourite.productId).subscribe(data1=>
    //       {
    //         this.product=data1;
    //       },
    //       (error:any)=>console.log(error));
    //       this.userService.getProfileByEmail(this.favourite.userEmail).subscribe(data2=>
    //         {
    //           this.userInfo=data2;
    //         },
    //         (error:any)=>console.log(error));
    //   },
    //   (error:any)=>console.log(error));

      
  }
  goToPurchase()
  {
    this.router.navigate(['/myPurchases']);
  }
  search(productName:string)
  {
      this.router.navigate(['/search2',productName]);
  }
}
