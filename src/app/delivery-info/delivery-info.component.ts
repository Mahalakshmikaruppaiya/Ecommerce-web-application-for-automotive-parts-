import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInfoService } from '../product-info.service';
import { ProductInfo } from '../product-info';
import { UserInfo } from '../user-info';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss']
})
export class DeliveryInfoComponent implements OnInit{

  id!:number;
  product!:ProductInfo;
  userInfo!:UserInfo[];


  constructor(private route:ActivatedRoute,
    private router:Router,
    private productService:ProductInfoService,
    private UserInfoService:UserInfoService){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.product=new ProductInfo();
    console.log(this.id);

    this.productService.getProductById(this.id).subscribe(data=>
      {
        console.log(data);
        this.product=data;
          this.UserInfoService.getAllProfileByProductId(this.id).subscribe(data1=>
            {
              console.log(data1);
              this.userInfo=data1;
            },
            (error:any)=>console.log(error));
      },
      (error:any)=>console.log(error));
  }
}
