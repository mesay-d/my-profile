import { Component,Input } from '@angular/core';
interface TableItem {
  name: string;
  age: number;
  job: string;
  [key: string]: any// I did beacuse of string not reader
}
interface HeaderItem {
  key: string;
  label: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input('class') classNames=''
  @Input() data:TableItem[]=[]
  @Input() headers:HeaderItem[]=[]

}
