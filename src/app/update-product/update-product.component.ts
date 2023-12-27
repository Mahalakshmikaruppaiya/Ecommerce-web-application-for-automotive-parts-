import { Component, OnInit } from '@angular/core';
import { ProductInfo } from '../product-info';
import { ProductInfoService } from '../product-info.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit{

  submit=false;
  productInfo!:ProductInfo;
  id!:number;
  constructor(private productService:ProductInfoService,
    private route:ActivatedRoute,
    private router:Router){}


  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.productInfo=new ProductInfo();
    console.log(this.id);
    this.productService.getProductById(this.id).subscribe(data=>
      {
        this.productInfo=data;
        console.log(data);
      },
      (error:any)=>console.log(error));
    
  }
  OnSubmit(id:number)
  {
    id=this.id;
      this.productService.updateProductById(this.id,this.productInfo).subscribe(data=>{
        console.log(data);
        alert("Product Updated");
        this.router.navigate(['/adminGetProductById',id]);
      },
      (error:any)=>console.log(error));
  }
  goToAdminHome()
  {
    this.router.navigate(['/adminGetProductById',this.id]);
  }
}
