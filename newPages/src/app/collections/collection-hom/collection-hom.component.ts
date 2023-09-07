import { Component } from '@angular/core';

interface TableItem {
  name: string;
  age: number;
  job: string;
}
interface HeaderItem {
  key: string;
  label: string;
}

@Component({
  selector: 'app-collection-hom',
  templateUrl: './collection-hom.component.html',
  styleUrls: ['./collection-hom.component.css']
})
export class CollectionHomComponent {
  
data:TableItem[]=[
  {name:"mesay",age:25,job:"enginer"},
  {name:"fiker",age:25,job:"enginer"},
  {name:"erbeto",age:25,job:"enginer"}
]
headers:HeaderItem[]=[
  {key:'name', label:"Name"},
  {key:"age",label:"Age"},
  {key:"job", label:"Job"}
]

}
