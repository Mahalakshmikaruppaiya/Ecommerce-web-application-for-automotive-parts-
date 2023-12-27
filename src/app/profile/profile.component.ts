import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { UserInfo } from '../user-info';
import {UserInfoService} from '../user-info.service';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  register!: RegistrationComponent;
  
  submit=false;
  userInfo:UserInfo=new UserInfo();
  email:string="";
  subscription!:Subscription;

  constructor(private data:DataService,
    private router:Router,private userInfoService:UserInfoService){}
  ngOnInit(): void {
    this.subscription=this.data.currentValue.subscribe(message=>
      {this.email=message});
   this.userInfo.userEmail=this.email;
  }

  OnSubmit()
 {
 
    console.log(this.userInfo);
    this.userInfoService.addProfile(this.userInfo).subscribe(data=>
      {
         console.log(data);
        alert("Profile Updated");
        this.router.navigate(['/home2']);
      },

      (error:any)=>console.log(error));
 
  }

  goToHome2()
  {
    this.router.navigate(['/home2']);
  }

}
