import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {  Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
/*
design patterns

MVC
model => ay7aga leha 3laka beldata
view => html , css
controller => functions ely btrbot el view bel model



mvvm
model => ay7aga leha 3laka beldata
view => html , css

viewmodel => data binding 


<Button></v

*/

export class MovieService {




  constructor( private _HttpClient:HttpClient) {

   
   }


   getTrendingAll(pageNumber):Observable<any>
   {
     return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/week?api_key=8c4a17696dab522853861e576ee44805&page="+pageNumber)
   }
   getTrendingMovie():Observable<any>
   {
     return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=8c4a17696dab522853861e576ee44805")
   }
   getTrendingTv(pageNumber):Observable<any>
   {
     return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/week?api_key=8c4a17696dab522853861e576ee44805&page="+pageNumber)
   }
   getTrendingPeople():Observable<any>
   {
     return this._HttpClient.get("https://api.themoviedb.org/3/trending/people/week?api_key=8c4a17696dab522853861e576ee44805")
   }
   

}
