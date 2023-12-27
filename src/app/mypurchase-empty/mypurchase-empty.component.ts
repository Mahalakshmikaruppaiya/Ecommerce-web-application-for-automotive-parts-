import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mypurchase-empty',
  templateUrl: './mypurchase-empty.component.html',
  styleUrls: ['./mypurchase-empty.component.scss']
})
export class MypurchaseEmptyComponent {

  constructor(private router:Router){}
  search(productName:string)
  {
      this.router.navigate(['/search2',productName]);
  }

  goToHome2()
  {
    this.router.navigate(['/home2']);
  }
}
