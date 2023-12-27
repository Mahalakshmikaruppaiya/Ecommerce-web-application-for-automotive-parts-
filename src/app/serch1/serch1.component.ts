import { Component, OnInit } from '@angular/core';
import { ProductInfo } from '../product-info';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductInfoService } from '../product-info.service';

@Component({
  selector: 'app-serch1',
  templateUrl: './serch1.component.html',
  styleUrls: ['./serch1.component.scss']
})
export class Serch1Component implements OnInit {

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
    
    this.router.navigate(['/register']);
  }

  serch(productName:string)
  {
    this.router.navigate(['/home']).then(()=>
    {
      this.router.navigate(['/search1',productName]);
     });
     
  }

}
