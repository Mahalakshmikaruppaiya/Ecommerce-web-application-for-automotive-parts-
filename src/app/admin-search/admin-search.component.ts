import { Component, OnInit } from '@angular/core';
import { ProductInfo } from '../product-info';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInfoService } from '../product-info.service';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.scss']
})
export class AdminSearchComponent implements OnInit {

  productList!:ProductInfo[];
  productName!:string;

  constructor(private router:Router,
    private productService:ProductInfoService,
    private route:ActivatedRoute){}

  ngOnInit(): void {
    this.productName=this.route.snapshot.params['name'];
  
    console.log(this.productName);
    this.productService.getAllProductBySearch(this.productName).subscribe(data=>
      {
        console.log(data);
        this.productList=data;
      },
    (error:any)=>console.log(error));
  }
  getProductById(id:number)
  {
    
    this.router.navigate(['/adminGetProductById',id]);
  }

  serch(productName:string)
  {
    this.router.navigate(['/adminHome']).then(()=>
    {
      this.router.navigate(['/adminSearch',productName]);
     });
     
  }


}
