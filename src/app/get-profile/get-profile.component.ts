import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { UserInfo } from '../user-info';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.scss']
})
export class GetProfileComponent implements OnInit
{
  profile:UserInfo=new UserInfo();
  email:string="";
  subscription!:Subscription;
  constructor(private data:DataService,private router:Router,private profileService:UserInfoService){}

  ngOnInit(): void {

    this.subscription=this.data.currentValue.subscribe(message=>
      {this.email=message});
      this.profileService.getProfileByEmail(this.email).subscribe(data=>
        {
          this.profile=data;
        })
      
    
  }
  search(productName:string)
  {
      this.router.navigate(['/search2',productName]);
  }
  goToProfile()
  {
    this.router.navigate(['/profile']);
  }
  goToUpdateProfile(id:number)
  {
    this.router.navigate(['/updateProfile',id]);
  }
}
