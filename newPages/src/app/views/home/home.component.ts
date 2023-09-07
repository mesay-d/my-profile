import { Component } from '@angular/core';

interface datas{
  value:string,
  label:string
}
interface listItem{
  image:string,
  title:string,
  description:string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data:datas[]=[
    {value:"22",label:"faves"},
    {value:"544544",label:"view"},
    {value:"5898",label:"view"},
    {value:"1044",label:"view"},
    {value:"832746",label:"view"}
  ]
  items=[
    {image:'assets/images/couch.jpeg',
    title:'couch',
    description:'this is a fantastic couch sit on'
  
  },
  {
    image:'/assets/images/dresser.jpeg',
    title:'Dresser',
    description:'this is a great dresser to put'
  }
  ]

}
