import { Component, OnInit } from '@angular/core';
import { ProductInfo } from '../product-info';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInfoService } from '../product-info.service';

@Component({
  selector: 'app-admin-get-product-by-id',
  templateUrl: './admin-get-product-by-id.component.html',
  styleUrls: ['./admin-get-product-by-id.component.scss']
})
export class AdminGetProductByIdComponent implements OnInit{

  id!:number;
  product!:ProductInfo;

constructor(private route:ActivatedRoute,
  private router:Router,
  private productService:ProductInfoService){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.product=new ProductInfo();
    console.log(this.id);
    this.productService.getProductById(this.id).subscribe(data=>
      {
        this.product=data;
      },
      (error:any)=>console.log(error));
    
  }
  goToHome2()
  {
    this.router.navigate(['/adminHome']);
  }

  onSubmit(id:number)
  {
    this.productService.deleteProductById(id).subscribe(data=>
      {
        console.log(data);
        
      });
      alert("product Deleted Successfully");
        this.router.navigate(['/adminHome']);
  }
  goToProductUpdate(id:number)
  {
    this.router.navigate(['/updateProduct',id]);
  }
}
