import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from '../user-info';
import { AdminInfo } from '../admin-info';
import { AdminInfoService } from '../admin-info.service';

@Component({
  selector: 'app-admin-get-profile',
  templateUrl: './admin-get-profile.component.html',
  styleUrls: ['./admin-get-profile.component.scss']
})
export class AdminGetProfileComponent implements OnInit
{
  AdminList!:AdminInfo[];

  constructor(private router:Router,
    private AdminService:AdminInfoService){}

  ngOnInit(): void {
    this.AdminService.getAllAdmin().subscribe(data=>
      {
        console.log(data);
        this.AdminList=data;
      },
      (error:any)=>console.log(error));
  }
  goToAdminProfile(id:number)
  {
    this.router.navigate(['/adminProfile',id]);
  }
}
