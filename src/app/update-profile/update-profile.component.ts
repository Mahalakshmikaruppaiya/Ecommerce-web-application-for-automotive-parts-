import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../user-info';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit
{
  submit=false;
  userInfo!:UserInfo;
  id!:number;
  constructor(private route:ActivatedRoute,private router:Router,private userInfoService:UserInfoService){}

  ngOnInit(): void
  {
    this.id=this.route.snapshot.params['id'];
    this.userInfo=new UserInfo();
    console.log(this.id);
    this.userInfoService.getProfileById(this.id).subscribe(data=>{
      console.log(data);
      this.userInfo=data;
    })
  }
goToGetProfile()
{
  this.router.navigate(['/getProfile']);
}

OnSubmit()
{
    this.userInfoService.updateProfileById(this.id,this.userInfo).subscribe(data=>
      {
        console.log(data);
        alert("profile is Updated");
        this.router.navigate(['/getProfile']);
      },
      (error:any)=>console.log(error));
}

}
