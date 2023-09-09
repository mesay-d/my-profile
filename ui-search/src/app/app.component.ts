import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private wikipedia:WikipediaService){}
  title = 'ui-search';
  pagelist:any=[]
  onTerm(event:string){
    console.log(event,"parent")
   this.wikipedia.SearchBarComponent(event).subscribe((result:any)=>{
    console.log(result)
   this.pagelist=result.query.search
   })
  }
}
