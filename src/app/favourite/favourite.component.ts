import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favourite } from '../favourite';
import { DataService } from '../data.service';
import { FavouriteService } from '../favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit{
email!:string;
  favouriteList!:Favourite[];
  constructor(private router:Router,
    private data:DataService,
    private favouriteService:FavouriteService){}

  ngOnInit(): void {
    this.data.currentValue.subscribe(message=>
      {
        this.email=message;
      });
    this.favouriteService.getAllFavouriteByEmail(this.email).subscribe(data=>
      {
        console.log(data);
        if(data.length==0)
        {
            this.router.navigate(['/myPurchaseEmpty']);
        }
        else{
        this.favouriteList=data;
        }
      });
  }
  goToMyFavouriteInfo(id:number,id1:number)
  {
    this.router.navigate(['/favouriteInfo',id]);
    this.data.getId(id1);
  }
  search(productName:string)
  {
      this.router.navigate(['/search2',productName]);
  }
}
