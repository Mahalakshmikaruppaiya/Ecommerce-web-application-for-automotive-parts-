import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInfo } from '../product-info';
import { ProductInfoService } from '../product-info.service';
import { BuyProduct } from '../buy-product';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { BuyProductService } from '../buy-product.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


  submit=false;
  id!:number;
  email:string="";
  subscription!:Subscription;
imgUrl!:string;
price!:number;
productName!:string;
product!:ProductInfo;
buyProduct:BuyProduct=new BuyProduct();

  constructor(private router:Router,
    private route:ActivatedRoute,
    private productService:ProductInfoService,
    private buyProductService:BuyProductService,
    private data:DataService,
    private curDate:DatePipe){}

    currentDate:any=this.curDate.transform(new Date(),"yyyy-MM-dd");
    currentMonth:any=this.curDate.transform(new Date(),"MM");
    currentYear:any=this.curDate.transform(new Date(),"yyyy");
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
    
  search(productName:string)
  {
      this.router.navigate(['/search2',productName]);
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
    this.buyProduct.paymentMethod="Debit Card";

    console.log(this.buyProduct);
    this.buyProductService.addBuyProduct(this.buyProduct).subscribe(data1=>
      {
        console.log(data1);
        // this.data.getInvoice(data1);
        this.data.getPaymentMethod(this.buyProduct.paymentMethod);
        this.data.getId(this.buyProduct.productId);
        this.data.changeMessage(this.buyProduct.userEmail);
        this.data.getCardNumber(this.buyProduct.debitCardNumber);
        this.data.getCardOwnerName(this.buyProduct.cardWonerName);
        this.data.getCurrentDate(this.buyProduct.date);
        console.log(this.buyProduct.id);
        console.log(this.buyProduct.paymentMethod);
        alert("Product Buyed Successfully");
        this.router.navigate(['/paymentConfirm']);
      },
      (error:any)=>console.log(error));

  }
  back()
  {
      this.router.navigate(['/paymentMethod',this.id]);
  }
}
