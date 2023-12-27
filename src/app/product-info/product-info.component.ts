import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInfo } from '../product-info';
import { ProductInfoService } from '../product-info.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit
{
    productInfo:ProductInfo=new ProductInfo();
  submit=false;
 // image:string="";  
  imgUrl:string="../../assets/profile/profileIcon1.png";
    
  
    constructor(private router:Router,private productService:ProductInfoService){}
  ngOnInit(): void {
  
  }

    OnSubmit()
    {
      console.log(this.productInfo);
      this.productService.addProduct(this.productInfo).subscribe(data=>
        {
          console.log(data);
          alert("product added");
          this.goToAdminHome();
        },
      (error)=>console.log(error));
    }

    goToAdminHome()
    {
      this.router.navigate(['/adminHome']);
    }
    getUrl()
    {
      this.imgUrl=this.productInfo.productImgUrl;
    }

}
