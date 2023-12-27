import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuyProductService } from '../buy-product.service';
import { BuyProduct } from '../buy-product';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { ProductInfo } from '../product-info';
import { ProductInfoService } from '../product-info.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-paymet-method',
  templateUrl: './paymet-method.component.html',
  styleUrls: ['./paymet-method.component.scss']
})
export class PaymetMethodComponent implements OnInit{

  id!:number;
  constructor(private router:Router,
    private route:ActivatedRoute,
    private buyProductService:BuyProductService,
    private data:DataService,
    private productService:ProductInfoService,
    private curDate:DatePipe){}

    product!:ProductInfo;
    buyProduct:BuyProduct=new BuyProduct();
    subscription!:Subscription;
    email!:string;
    imgUrl!:string;
    productName!:string;
    price!:number;
     currentDate:any=this.curDate.transform(new Date(),"yyyy-MM-dd");
    
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.product=new ProductInfo();
    console.log(this.id);
    console.log("current date "+this.currentDate)
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
    this.buyProduct.paymentMethod="CaseOn Delivery";

    console.log(this.buyProduct);
    this.buyProductService.addBuyProduct(this.buyProduct).subscribe(data1=>
      {
        console.log(data1);
        // this.data.getInvoice(data1);
        this.data.getPaymentMethod(this.buyProduct.paymentMethod);
        this.data.getId(this.buyProduct.productId);
        this.data.changeMessage(this.buyProduct.userEmail);
       
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

  goToPayment()
  {
    this.router.navigate(['/payment',this.id]);
  }
  goToBankPayment()
  {
    this.router.navigate(['/bankPayment',this.id]);
  }
  goToGooglePay()
  {
    this.router.navigate(['/googlePay',this.id]);
  }
  back()
  {
    this.router.navigate(['/getProductById',this.id]);
  }
}
