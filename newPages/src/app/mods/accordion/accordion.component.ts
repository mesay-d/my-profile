import { Component, Input } from '@angular/core';

interface dataAccordian{
  title:string,
  content:string
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  openIndex=0;
@Input() items:dataAccordian[]=[]
onclick(index:number){
  if(index===this.openIndex){
    this.openIndex=-1
  }else{
    this.openIndex=index
  }
  
  
}
}
