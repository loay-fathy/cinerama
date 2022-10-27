import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service'

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  
  currentPage = 1;
  pageNumbers:number[]=[];
  trendingTV = [];

  constructor (private _MovieService:MovieService) {
 
    for(let i =1 ; i <11 ; i++)
    {
      this.pageNumbers.push(i);
      console.log(this.pageNumbers)
    }

    _MovieService.getTrendingTv(this.currentPage).subscribe((data) => {this.trendingTV= data.results} )
  }

  changeNumber(ind)
  {
    this.currentPage  = ind;
   this._MovieService.getTrendingTv(this.currentPage ).subscribe( (data) => { this.trendingTV= data.results } )
  }
  prev()
  {
     this.changeNumber(this.currentPage -1)
  }
  next()
  {
     this.changeNumber(this.currentPage +1)
  }

  ngOnInit() {
  }

}
