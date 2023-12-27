import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../user-entity';
import { DataService } from '../data.service';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password2',
  templateUrl: './forget-password2.component.html',
  styleUrls: ['./forget-password2.component.scss']
})
export class ForgetPassword2Component implements OnInit{

  user:UserEntity=new UserEntity();
  submit=false;
  userEmail!:string;
  password!:string;
  password1!:string;

  constructor(private data:DataService,
    private userService:UserServiceService,
    private router:Router){}
    
  ngOnInit(): void {
    this.data.currentValue.subscribe(message=>
      {
        this.userEmail=message;

        this.userService.getUserByEmail(this.userEmail).subscribe(data=>
          {
            this.user=data;
          },
          (error:any)=>console.log(error));
      });
  }
  OnSubmit()
  {
    this.user.userPassword=this.password;

    if(this.password==this.password1)
    {
      this.userService.updatePassword(this.userEmail,this.user).subscribe(data=>
        {
          console.log(data);
          alert("Password Updated SuccessFully");
          this.router.navigate(['/login']);
        },
        (error:any)=>console.log(error));
    } 
  }
  back()
  {
    this.router.navigate(['/forgetPassword']);
  }
}
