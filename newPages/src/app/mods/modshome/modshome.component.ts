import { Component } from '@angular/core';


@Component({
  selector: 'app-modshome',
  templateUrl: './modshome.component.html',
  styleUrls: ['./modshome.component.css']
})
export class ModshomeComponent {
  showmodal=false;

  items=[
    {title:'why am I ?',content:"you are created by God"},
    {title:'what is your plan ?',content:"your plan is on the Hand of God"},
    {title:'who loves me?',content:"God is love you"}
  ]

  onclick(){
    this.showmodal=!this.showmodal

  }

}
