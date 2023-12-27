import { Component } from '@angular/core';
import { UserEntity } from '../user-entity';
import { DataService } from '../data.service';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

  subscription!:Subscription;
  user:UserEntity=new UserEntity();
  submit=false;
  userEmail!:string;
  password!:string;

  constructor(private data:DataService,
    private userService:UserServiceService,
    private router:Router){}
    
  OnSubmit()
  {
    this.userService.getUserByEmail(this.userEmail).subscribe(data=>{
      console.log(data);
      if(data==null)
      {
      alert("pleace Enter Valid Email")
      }
      if(data!=null)
      {
      this.user=data;
      this.data.changeMessage(this.userEmail);
      this.router.navigate(['/forgetPassword2']);
      }
      // console.log(this.user.userPassword);
      // console.log(this.password);
      // console.log(this.user.userPassword);
      // // if(this.password=="")
      // // {
      // //   alert("pleace Enter valid Email And Password");
      // // }
   
      // if(this.password==this.user.userPassword)
      // {
      //   alert("Login SuccessFull");
  
      //   this.data.changeMessage(this.userEmail);
      //   console.log(this.userEmail);
      // this.router.navigate(['/home2']);
      // }
      // else
      // {
      //   alert("Pleace Enter Valid Password");
      // }
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
  
back()
{
  this.router.navigate(['/login']);
}
}
