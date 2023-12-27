import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuyProductService } from '../buy-product.service';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { BuyProduct } from '../buy-product';
import { ProductInfo } from '../product-info';
import { ProductInfoService } from '../product-info.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-google-pay',
  templateUrl: './google-pay.component.html',
  styleUrls: ['./google-pay.component.scss']
})
export class GooglePayComponent implements OnInit{

  constructor(private router:Router,
    private buyProductService:BuyProductService,
    private data:DataService,
    private productService:ProductInfoService,
    private route:ActivatedRoute,
    private curDate:DatePipe){}

    submit=false;
    subscription!:Subscription;
    email:string="";
    imgUrl!:string;
    id!:number;
    productName!:string;
    price!:number;
    buyProduct:BuyProduct=new BuyProduct();
    product:ProductInfo=new ProductInfo();
    currentDate:any=this.curDate.transform(new Date(),"yyyy-MM-dd");

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

  OnSubmit()
  {
    
    this.subscription=this.data.currentValue.subscribe(message=>
      {
          this.email=message;
      });
    this.buyProduct.imgUrl=this.imgUrl;
    this.buyProduct.productId=this.id;
    this.buyProduct.productName=this.productName;
    this.buyProduct.price=this.price;
    this.buyProduct.userEmail=this.email;
    this.buyProduct.date=this.currentDate;
    this.buyProduct.paymentMethod="GooglePay";

    console.log(this.buyProduct);
    this.buyProductService.addBuyProduct(this.buyProduct).subscribe(data1=>
      {
        console.log(data1);
        // this.data.getInvoice(data1);
        this.data.getPaymentMethod(this.buyProduct.paymentMethod);
        this.data.getId(this.buyProduct.productId);
        this.data.changeMessage(this.buyProduct.userEmail);
    
        this.data.getCardOwnerName(this.buyProduct.googlePayUserName);
        this.data.getBankName(this.buyProduct.upi);
        this.data.getCurrentDate(this.buyProduct.date);

        console.log(this.buyProduct.id);
        console.log(this.buyProduct.paymentMethod);
        alert("Product Buyed Successfully");
        this.router.navigate(['/paymentConfirm']);
      },
      (error:any)=>console.log(error));

  }


  search(productName:string)
  {
      this.router.navigate(['/search2',productName]);
  }
  back()
  {
      this.router.navigate(['/paymentMethod',this.id]);
  }
}
