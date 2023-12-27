import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss']
})
export class BuyProductComponent {

  
  constructor(private router:Router){}
  search(productName:string)
  {
      this.router.navigate(['/search2',productName]);
  }
}
