import { getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';
import { ProductInfo } from '../product-info';
import { ProductInfoService } from '../product-info.service';
import { UserEntity } from '../user-entity';
import { UserInfo } from '../user-info';
import { UserInfoService } from '../user-info.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  submit=false;
user:UserEntity=new UserEntity();
profile:UserInfo=new UserInfo();

password1!:string;
password2!:string;

  userName: string=this.user.userName;

  email:string="";
  
 
  constructor(private userService:UserServiceService,
    private data:DataService,
    private router:Router){}
  ngOnInit(): void 
  {

  }
OnSubmit()
{  
  if(this.password1==this.password2)
  {
  console.log(this.user);
  this.user.userPassword=this.password1;
  this.email=this.user.userEmail;
  this.data.changeMessage(this.email);
  console.log(this.email);
  this.userService.addUser(this.user).subscribe(data=>
    {
      console.log(data);
       alert("Register Successfull");
       this.goToProfile();
    },
    (error:any)=>{
      alert("Email Id  is Alredy Exists");
      console.log(error)
    });
  }
  }
goToLogin()
{
  this.router.navigate(['/loginOption']);
}
// goToHome2()
// {
//   this.router.navigate(['/home2']);
// }
goToProfile()
{
  this.router.navigate(['/profile']);
}

// newMessage()
// {
//   this.data.changeMessage(this.email);
// }

}
