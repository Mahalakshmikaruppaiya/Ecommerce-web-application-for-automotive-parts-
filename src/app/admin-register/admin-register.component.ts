import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserEntity } from '../user-entity';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})
export class AdminRegisterComponent 
{
    user:UserEntity=new UserEntity();

    constructor(private router:Router){}

    goToLogin()
    {
        this.router.navigate(['/loginOption']);
    }

    OnSubmit()
    {
      
    }

}
