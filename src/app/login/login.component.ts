import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UserEntity } from '../user-entity';
import { UserServiceService } from '../user-service.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  user:UserEntity=new UserEntity();
  submit=false;
  userEmail!:string;
  password!:string;

  constructor(private data:DataService,
    private userService:UserServiceService,
    private router:Router){}
  ngOnInit(): void 
  { 
  }

  OnSubmit()//login
  {
   this.userService.getUserByEmail(this.userEmail).subscribe(data=>{
    console.log(data);
    if(data==null)
    {
    alert("pleace Enter Valid Email")
    }
    this.user=data;
    console.log(this.user.userPassword);
    console.log(this.password);
    console.log(this.user.userPassword);
    // if(this.password=="")
    // {
    //   alert("pleace Enter valid Email And Password");
    // }
 
    if(this.password==this.user.userPassword)
    {
      alert("Login SuccessFull");

      this.data.changeMessage(this.userEmail);
      console.log(this.userEmail);
    this.router.navigate(['/home2']);
    }
    else
    {
      alert("Pleace Enter Valid Password");
    }
   },
   (error:any)=>{
    alert("Pleace Enter valid email");
    console.log(error);
   });
    // this.userService.login(this.userName,this.userPassword).subscribe(data=>
    //   {
    //     console.log(data);
        
    //     this.router.navigate(['/home2']);
        
    //   },
    //   (error:any)=>console.log(error));

      
  }

  goToHome()
  {
    this.router.navigate(['/home']);
  }
  goToRegister()
  {
    this.router.navigate(['/register']);
  }
  goToForgetPassword()
  {
    this.router.navigate(['/forgetPassword']);
  }

}
