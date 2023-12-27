import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-option',
  templateUrl: './register-option.component.html',
  styleUrls: ['./register-option.component.scss']
})
export class RegisterOptionComponent 
{
  constructor(private router:Router){}

  goToAdminRegister()
  {
    this.router.navigate(['/adminRegister']);
  }

  goToUserRegister()
  {
    this.router.navigate(['/register']);
  }

}
