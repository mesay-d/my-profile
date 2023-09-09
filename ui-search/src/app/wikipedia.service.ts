import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  url='https://en.wikipedia.org/w/api.php?'
  param={
    params:{
       action:"query",
format:"json",
list:"search",
utf8:1,
srsearch:"space",
origin:'*'
    }
   
  }

  constructor(private http:HttpClient) {  }

  public SearchBarComponent(term: string){
    this.param.params.srsearch=term
   return this.http.get(this.url,this.param)
  
  }
}
