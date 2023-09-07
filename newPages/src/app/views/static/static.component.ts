import { Component,Input } from '@angular/core';
interface datas{
  value:string,
  label:string
}

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css']
})
export class StaticComponent {
@Input() data:datas[]=[]

}
