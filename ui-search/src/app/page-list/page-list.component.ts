import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  xss=`<IMG SRC="javascript:alert("XSS");">`
  @Input()pagelist:any=[]

}
