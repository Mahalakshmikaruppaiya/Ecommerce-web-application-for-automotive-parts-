import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInfoService } from '../product-info.service';
import { ProductInfo } from '../product-info';
import { BuyProduct } from '../buy-product';
import { BuyProductService } from '../buy-product.service';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bank-payment',
  templateUrl: './bank-payment.component.html',
  styleUrls: ['./bank-payment.component.scss']
})
export class BankPaymentComponent  implements OnInit{

  constructor(private router:Router,
    private productService:ProductInfoService,
    private route:ActivatedRoute,
    private buyProductService:BuyProductService,
    private data:DataService,
    private curDate:DatePipe){}

    submit=false;
    id!:number;
    imgUrl!:string;
    price!:number;
    productName!:string;
    email:string="";
    subscription!:Subscription;
    product:ProductInfo=new ProductInfo();
    buyProduct:BuyProduct=new BuyProduct();
    currentDate:any=this.curDate.transform(new Date(),"yyyy-MM-dd");

    ngOnInit(): void {
      
      this.id=this.route.snapshot.params['id'];
      this.product=new ProductInfo();

      this.productService.getProductById(this.id).subscribe(data=>
        {
          this.product=data;
          this.imgUrl=this.product.productImgUrl;
          this.price=this.product.price;
          this.productName=this.product.productName;
        },
        (error:any)=>console.log(error));
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
      this.buyProduct.paymentMethod="Bank";
  
      console.log(this.buyProduct);
      this.buyProductService.addBuyProduct(this.buyProduct).subscribe(data1=>
        {
          console.log(data1);
          // this.data.getInvoice(data1);
          this.data.getPaymentMethod(this.buyProduct.paymentMethod);
          this.data.getId(this.buyProduct.productId);
          this.data.changeMessage(this.buyProduct.userEmail);
          this.data.getCardNumber(this.buyProduct.accountNumber);
          this.data.getCardOwnerName(this.buyProduct.bankAccountHolderName);
          this.data.getBankName(this.buyProduct.bankName);
          this.data.getBranch(this.buyProduct.bankBranch);
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
